"use client"

import { AlertTriangle, CheckCircle, XCircle, DollarSign, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface Damage {
  type: string
  severity: "Minor" | "Moderate" | "Severe"
  location: string
  confidence: number
}

interface AssessmentData {
  description?: string
  damages: Damage[]
  overallSeverity: string
  estimatedCost: string
  summary: string
}

interface DamageAssessmentProps {
  data: AssessmentData
}

export default function DamageAssessment({ data }: DamageAssessmentProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "minor":
        return "bg-green-100 text-green-800 border-green-200"
      case "moderate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "severe":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "minor":
        return <CheckCircle className="h-4 w-4" />
      case "moderate":
        return <AlertTriangle className="h-4 w-4" />
      case "severe":
        return <XCircle className="h-4 w-4" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  return (
    <Card className="shadow-xl border-0 h-fit">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg p-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <AlertTriangle className="h-5 w-5" />
          Damage Assessment Results
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4 space-y-4">
        {/* Overall Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-gray-900 text-sm">Overall Assessment</h3>
            <Badge className={getSeverityColor(data.overallSeverity)}>
              {getSeverityIcon(data.overallSeverity)}
              <span className="ml-1">{data.overallSeverity}</span>
            </Badge>
          </div>
          <p className="text-xs text-gray-700 mb-2 leading-relaxed">{data.summary}</p>
          <div className="flex items-center gap-2 text-base font-semibold text-green-600">
            <DollarSign className="h-4 w-4" />
            <span>Estimated Cost: ₹1,00,000 - ₹1,50,000</span>
          </div>
        </div>

        {/* User Description */}
        {data.description && (
          <div className="bg-gray-50 rounded-lg p-3 border">
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">Your Description</h3>
            <p className="text-xs text-gray-700 leading-relaxed italic">"{data.description}"</p>
          </div>
        )}

        {/* Detected Damages */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 text-sm">Detected Damages</h3>
          <div className="space-y-3">
            {data.damages.map((damage, index) => (
              <div key={index} className="border rounded-lg p-3 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-full ${getSeverityColor(damage.severity)}`}>
                      {getSeverityIcon(damage.severity)}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{damage.type}</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <MapPin className="h-3 w-3" />
                        <span>{damage.location}</span>
                      </div>
                    </div>
                  </div>
                  <Badge className={getSeverityColor(damage.severity)} variant="outline">
                    {damage.severity}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Confidence Level</span>
                    <span className="font-medium">{damage.confidence}%</span>
                  </div>
                  <Progress value={damage.confidence} className="h-1.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-gray-50 rounded-lg p-3 border">
          <h3 className="font-semibold text-gray-900 mb-2 text-sm">Recommended Actions</h3>
          <ul className="space-y-1.5 text-xs text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Contact your insurance provider with this assessment report</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Get quotes from certified repair shops in your area</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Schedule repairs for moderate to severe damages promptly</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Keep this report for insurance and repair documentation</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
