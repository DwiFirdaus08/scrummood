import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeamEmotionMap } from "@/components/team-emotion-map"
import { TeamTimeline } from "@/components/team-timeline"
import { TeamComparison } from "@/components/team-comparison"

export default function TeamVisualizationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Team Visualization</h1>
        <p className="text-muted-foreground">Visualize and understand your team's emotional patterns</p>
      </div>

      <Tabs defaultValue="heatmap">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="heatmap">Emotion Heatmap</TabsTrigger>
          <TabsTrigger value="timeline">Timeline View</TabsTrigger>
          <TabsTrigger value="comparison">Team Comparison</TabsTrigger>
        </TabsList>

        <TabsContent value="heatmap">
          <Card>
            <CardHeader>
              <CardTitle>Team Emotion Heatmap</CardTitle>
              <CardDescription>Visualize the emotional state of your team during the current session</CardDescription>
            </CardHeader>
            <CardContent>
              <TeamEmotionMap />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline">
          <Card>
            <CardHeader>
              <CardTitle>Emotion Timeline</CardTitle>
              <CardDescription>Track how emotions change over time during the session</CardDescription>
            </CardHeader>
            <CardContent>
              <TeamTimeline />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comparison">
          <Card>
            <CardHeader>
              <CardTitle>Team Comparison</CardTitle>
              <CardDescription>Compare emotional patterns across different teams or sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <TeamComparison />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Emotional Insights</CardTitle>
            <CardDescription>AI-generated insights based on team emotions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2">Positive Trend</h3>
                <p className="text-sm text-gray-700">
                  The team's overall mood has improved by 15% compared to last week's sessions. This positive trend
                  correlates with the recent project milestone completion.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2">Stress Patterns</h3>
                <p className="text-sm text-gray-700">
                  Stress levels tend to peak around 15 minutes into the session. Consider restructuring the meeting to
                  address challenging topics earlier.
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-medium mb-2">Team Dynamics</h3>
                <p className="text-sm text-gray-700">
                  There's a noticeable emotional alignment between team members, suggesting good team cohesion and
                  shared understanding of project goals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emotion Distribution</CardTitle>
            <CardDescription>Breakdown of emotions across the team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span>Happy</span>
                </div>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                </div>
                <span className="text-sm">40%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span>Neutral</span>
                </div>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                </div>
                <span className="text-sm">30%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span>Stressed</span>
                </div>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "15%" }}></div>
                </div>
                <span className="text-sm">15%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                  <span>Sad</span>
                </div>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: "10%" }}></div>
                </div>
                <span className="text-sm">10%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span>Angry</span>
                </div>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "5%" }}></div>
                </div>
                <span className="text-sm">5%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
