package com.microsentry.dto;

public record ServiceHealthSnapshot(
        String serviceName,
        double latencyMs,
        double errorRate,
        double throughput,
        String complianceStatus
) {
}
