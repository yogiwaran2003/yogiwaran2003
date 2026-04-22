package com.microsentry;

import com.microsentry.model.UserAccount;
import com.microsentry.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class MicroSentryApplication {

    public static void main(String[] args) {
        SpringApplication.run(MicroSentryApplication.class, args);
    }

    @Bean
    CommandLineRunner seedAdmin(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> userRepository.findByEmail("admin@microsentry.dev").orElseGet(() -> userRepository.save(
                UserAccount.builder()
                        .email("admin@microsentry.dev")
                        .password(passwordEncoder.encode("ChangeMe123!"))
                        .role("ROLE_ADMIN")
                        .build()
        ));
    }
}
