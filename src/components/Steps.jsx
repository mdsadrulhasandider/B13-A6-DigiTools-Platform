export default function Steps() {
  const steps = [
    {
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: "/assets/images/products/createaccount.png"
    },
    {
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: "/assets/images/products/chooseproduct.png"
    },
    {
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: "/assets/images/products/startcreating.png"
    }
  ]

  return (
    <section className="py-16" style={{ backgroundColor: '#F5F7FB' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-3">Get Started In 3 Steps</h2>
        <p className="text-center text-sm text-base-content/60 max-w-2xl mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl border border-base-200 shadow-sm p-10 text-center"
            >
              <div
                className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
                style={{
                  background: "linear-gradient(135deg, #5a0dd6ff, #ad61ebff)",
                  color: "white"
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              <div
                className="w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-6"
             
              >
                <img src={step.icon} alt={step.title} className="w-11 h-11" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-base-content/60">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
