const StatCard = ({ title, value, tone = 'emerald' }) => {
  const toneMap = {
    emerald: 'from-emerald-500/20 to-emerald-400/5 border-emerald-400/30',
    sky: 'from-sky-500/20 to-sky-400/5 border-sky-400/30',
    rose: 'from-rose-500/20 to-rose-400/5 border-rose-400/30',
    amber: 'from-amber-500/20 to-amber-400/5 border-amber-400/30'
  }

  return (
    <div className={`rounded-xl border bg-gradient-to-br p-4 ${toneMap[tone]}`}>
      <p className="text-sm text-slate-300">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  )
}

export default StatCard
