"use client"

import { Shield, Zap, Users, Award, Target, Heart, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SpotlightCard from "@/components/SpotlightCard"
import ScrollReveal from "@/components/scroll-reveal"

export default function AboutPage() {
  const stats = [
    { number: "99%", label: "Accuracy Rate", icon: Target },
    { number: "50K+", label: "Assessments Completed", icon: CheckCircle },
    { number: "24/7", label: "AI Support Available", icon: Zap },
    { number: "500+", label: "Partner Workshops", icon: Users },
  ]

  const values = [
    {
      icon: Shield,
      title: "Precision & Reliability",
      description:
        "Our AI technology delivers industry-leading accuracy in damage detection and assessment, ensuring reliable results every time.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description:
        "We continuously push the boundaries of AI technology to provide cutting-edge solutions for the automotive repair industry.",
    },
    {
      icon: Heart,
      title: "Customer Success",
      description:
        "Your success is our priority. We're committed to helping body repair shops streamline their operations and grow their business.",
    },
    {
      icon: Award,
      title: "Industry Excellence",
      description:
        "Recognized by automotive professionals worldwide for our commitment to quality and technological advancement.",
    },
  ]

  const team = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      description:
        "15+ years in automotive technology and AI development. Former Tesla engineer with expertise in computer vision.",
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      description:
        "AI/ML expert with PhD in Computer Vision. Led development teams at Google and Microsoft before joining Panel Pro.",
    },
    {
      name: "Arjun Patel",
      role: "Head of Operations",
      description:
        "Former automotive industry executive with 20+ years experience in body repair operations and business development.",
    },
  ]

  return (
    <div className="min-h-screen text-white">
      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  At Panel Pro, we're on a mission to transform the automotive repair industry through intelligent
                  technology. Based in Chennai, we understand the unique challenges faced by body repair shops in India
                  and globally.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our AI-powered car damage assessment platform eliminates guesswork, reduces assessment time from hours
                  to seconds, and provides accurate, detailed reports that help repair shops deliver exceptional service
                  to their customers.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/30">
                  Learn More About Our Technology
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <ScrollReveal key={index}>
              <SpotlightCard
                key={index}
                className="text-center group glass-card rounded-3xl card-rise"
                spotlightColor="rgba(59, 130, 246, 0.15)"
              >
                <div className="flex flex-col items-center">
                  <stat.icon className="h-12 w-12 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at Panel Pro
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ScrollReveal key={index}>
              <Card
                key={index}
                className="glass-card border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 rounded-3xl card-rise"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The visionaries and experts driving Panel Pro's innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <ScrollReveal key={index}>
              <SpotlightCard
                key={index}
                className="text-center group glass-card rounded-3xl card-rise"
                spotlightColor="rgba(59, 130, 246, 0.1)"
              >
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-blue-500/15 border-2 border-blue-500/30 flex items-center justify-center text-4xl font-bold text-blue-200">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </div>
              </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Chennai Headquarters</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Located in the heart of Chennai's technology corridor, our headquarters at Guindy serves as the
                  innovation hub where our team of AI experts, automotive engineers, and industry specialists work
                  together to push the boundaries of what's possible.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">State-of-the-art AI development labs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">24/7 customer support center</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Training and certification facilities</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Partnership development center</span>
                  </div>
                </div>
                <div className="glass-card rounded-2xl p-6 border border-blue-500/20">
                  <h3 className="text-lg font-semibold text-white mb-3">Visit Us</h3>
                  <p className="text-gray-300 text-sm">
                    78/34A, Ground Floor
                    <br />
                    Real Diamond Building, 32 Mount Road
                    <br />
                    Guindy, Chennai, Tamil Nadu 600032
                    <br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="font-script text-3xl text-blue-200 mb-2">Built to elevate every workshop</p>
          <h2 className="section-title text-3xl md:text-4xl mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join hundreds of body repair shops already using Panel Pro to streamline their damage assessment process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/30">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
