"use client"

import { useState } from "react"
import ChatInterface from "@/components/chat-interface"
import DamageAssessment from "@/components/damage-assessment"
import ScrollReveal from "@/components/scroll-reveal"

export default function ChatbotPage() {
  const [assessmentData, setAssessmentData] = useState(null)

  return (
    <div className="min-h-screen pt-32 pb-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12 glass-panel rounded-3xl px-6 py-10 sm:p-12">
            <p className="font-script text-3xl text-blue-200 mb-2">Converse. Analyze. Resolve.</p>
            <h1 className="section-title text-3xl md:text-5xl text-white mb-4">
              AI Damage Assessment
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Chat Interface
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Describe your car damage to our AI assistant for detailed damage analysis and repair cost estimates
            </p>
          </div>

          {/* Chat Interface Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="order-1">
              <ChatInterface onAssessmentComplete={setAssessmentData} />
            </div>
            <div className="order-2">
              {assessmentData ? (
                <DamageAssessment data={assessmentData} />
              ) : (
                <div className="glass-card border border-gray-700 rounded-2xl p-8 text-center h-[600px] flex flex-col justify-center">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Assessment Results</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Describe your car damage in the chat to get started. Our AI will analyze your description and
                    provide detailed assessment results here.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <ScrollReveal>
            <div className="glass-card card-rise border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Analysis</h3>
              <p className="text-gray-400 text-sm">
                Get comprehensive damage reports in seconds with our advanced AI technology
              </p>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
            <div className="glass-card card-rise border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">99% Accuracy</h3>
              <p className="text-gray-400 text-sm">
                Industry-leading precision in damage detection and cost estimation
              </p>
            </div>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
            <div className="glass-card card-rise border border-gray-700 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-2-2V10a2 2 0 012-2h2m2-4h6a2 2 0 012 2v6a2 2 0 01-2 2h-6l-4 4V8a2 2 0 012-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-gray-400 text-sm">24/7 AI assistance with detailed explanations and recommendations</p>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}
