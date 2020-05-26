package jh01;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("jh01");

        noClasses()
            .that()
                .resideInAnyPackage("jh01.service..")
            .or()
                .resideInAnyPackage("jh01.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..jh01.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
