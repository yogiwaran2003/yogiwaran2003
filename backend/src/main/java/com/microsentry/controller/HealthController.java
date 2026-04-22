package com.microsentry.controller;

import com.microsentry.dto.ServiceHealthSnapshot;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/services")
public class HealthController {

    @GetMapping("/health-scorecards")
    @PreAuthorize("hasAnyRole('ADMIN','VIEWER')")
    public List<ServiceHealthSnapshot> getHealthScorecards() {
        return List.of(
                new ServiceHealthSnapshot("auth-service", 85.4, 0.3, 441.2, "PASS"),
                new ServiceHealthSnapshot("billing-service", 132.1, 1.8, 172.9, "WARN"),
                new ServiceHealthSnapshot("gateway-service", 64.6, 0.1, 908.0, "PASS")
        );
    }
}
