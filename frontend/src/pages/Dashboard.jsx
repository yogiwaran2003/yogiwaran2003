import StatCard from '../components/StatCard'

const sampleRows = [
  { service: 'auth-service', latency: '85ms', errorRate: '0.3%', throughput: '441 rps', compliance: 'PASS' },
  { service: 'billing-service', latency: '132ms', errorRate: '1.8%', throughput: '172 rps', compliance: 'WARN' },
  { service: 'gateway-service', latency: '64ms', errorRate: '0.1%', throughput: '908 rps', compliance: 'PASS' }
]

const Dashboard = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">MicroSentry Command Center</h1>
          <p className="text-slate-400">Spring-native health, compliance, and incident readiness for Docker microservices.</p>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <StatCard title="Services Discovered" value="27" tone="sky" />
          <StatCard title="Global Error Rate" value="0.8%" tone="rose" />
          <StatCard title="Compliance Coverage" value="91%" tone="emerald" />
          <StatCard title="Monthly Infra Waste" value="$1,420" tone="amber" />
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
          <h2 className="mb-4 text-xl font-semibold">Health Scorecards</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left text-sm">
              <thead className="border-b border-slate-800 text-slate-400">
                <tr>
                  <th className="p-3">Service</th>
                  <th className="p-3">Latency</th>
                  <th className="p-3">Error Rate</th>
                  <th className="p-3">Throughput</th>
                  <th className="p-3">Compliance</th>
                </tr>
              </thead>
              <tbody>
                {sampleRows.map((row) => (
                  <tr key={row.service} className="border-b border-slate-800/70">
                    <td className="p-3">{row.service}</td>
                    <td className="p-3">{row.latency}</td>
                    <td className="p-3">{row.errorRate}</td>
                    <td className="p-3">{row.throughput}</td>
                    <td className="p-3">
                      <span className={`rounded-full px-2 py-1 text-xs font-semibold ${row.compliance === 'PASS' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>
                        {row.compliance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Dashboard
