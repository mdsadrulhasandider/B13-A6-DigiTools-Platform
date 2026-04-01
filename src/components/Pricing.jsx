export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for getting started",
      price: "$0",
      period: "/Month",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      desc: "Best for professionals",
      price: "$29",
      period: "/Month",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      desc: "For teams and businesses",
      price: "$99",
      period: "/Month",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding"
      ],
      highlighted: false
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">Simple, Transparent Pricing</h2>
        <p className="text-center text-sm text-base-content/60 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {plans.map((plan, i) => {
            const isPro = plan.highlighted
            return (
              <div
                key={i}
                className={
                  isPro
                    ? 'relative rounded-2xl p-[1px] bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6]'
                    : 'relative rounded-2xl p-[1px] bg-base-200/40'
                }
              >
                {isPro && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="px-4 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: '#FDE68A', color: '#7C2D12' }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={
                    isPro
                      ? 'rounded-2xl h-full bg-gradient-to-br from-[#6D28D9] to-[#8B5CF6] text-white p-8'
                      : 'rounded-2xl h-full bg-base-100 p-8 shadow-sm'
                  }
                >
                  <h3 className={isPro ? 'text-xl font-bold' : 'text-xl font-bold'}>{plan.name}</h3>
                  <p className={isPro ? 'text-sm text-white/70 mt-1' : 'text-sm text-base-content/60 mt-1'}>
                    {plan.desc}
                  </p>

                  <div className="mt-6 flex items-end gap-1">
                    <span className={isPro ? 'text-4xl font-extrabold' : 'text-4xl font-extrabold'}>
                      {plan.price}
                    </span>
                    <span className={isPro ? 'text-sm text-white/70 pb-1' : 'text-sm text-base-content/60 pb-1'}>
                      {plan.period}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <span className={isPro ? 'text-white' : 'text-success'}>✓</span>
                        <span className={isPro ? 'text-white/90' : 'text-base-content/80'}>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <button
                      className={
                        isPro
                          ? 'btn w-full border-0 bg-white text-[#6D28D9] hover:bg-white'
                          : 'btn w-full border-0 text-white'
                      }
                      style={
                        isPro
                          ? { borderRadius: '9999px' }
                          : {
                              borderRadius: '9999px',
                              background: 'linear-gradient(135deg, #8B5CF6 0%, #4F39F6 100%)'
                            }
                      }
                    >
                      {plan.name === 'Starter'
                        ? 'Get Started Free'
                        : plan.name === 'Pro'
                          ? 'Start Pro Trial'
                          : 'Contact Sales'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
