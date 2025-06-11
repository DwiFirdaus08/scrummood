import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { EmotionChart } from "@/components/emotion-chart"
import { TeamMoodSummary } from "@/components/team-mood-summary"
import { RecentSuggestions } from "@/components/recent-suggestions"
import { UpcomingScrums } from "@/components/upcoming-scrums"
import { Clock, Video, TrendingUp, Users, Calendar, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Monitor your team's emotional health and upcoming sessions.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Link href="/dashboard/meeting">
            <Button className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto">
              <Video className="mr-2 h-4 w-4" /> Join Active Meeting
            </Button>
          </Link>
          <Button variant="outline" className="w-full sm:w-auto">
            <Clock className="mr-2 h-4 w-4" /> View Past Sessions
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <div className="h-4 w-4 rounded-full bg-green-500"></div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Frontend Team Daily Scrum</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Mood</CardTitle>
            <TrendingUp className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Neutral</div>
            <p className="text-xs text-muted-foreground">+2% from yesterday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Scrums</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next: Backend Team (10:00 AM)</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Suggestions</CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 new since yesterday</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Team Emotion Trends</CardTitle>
            <CardDescription>Emotional patterns over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <EmotionChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Team Mood</CardTitle>
            <CardDescription>Real-time emotional state</CardDescription>
          </CardHeader>
          <CardContent>
            <TeamMoodSummary />
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section - 3 Column Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Team Suggestions
            </CardTitle>
            <CardDescription>AI recommendations for the team</CardDescription>
          </CardHeader>
          <CardContent className="max-h-80 overflow-y-auto">
            <RecentSuggestions />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Sessions
            </CardTitle>
            <CardDescription>Your scheduled Daily Scrums</CardDescription>
          </CardHeader>
          <CardContent className="max-h-80 overflow-y-auto">
            <UpcomingScrums />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Personal Insights
            </CardTitle>
            <CardDescription>Personalized suggestions for you</CardDescription>
          </CardHeader>
          <CardContent className="max-h-80 overflow-y-auto">
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-sm text-blue-800">Practice Active Listening</h4>
                <p className="text-xs text-blue-700 mt-1">Try to ask more clarifying questions during discussions</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-blue-600">From meeting</span>
                  <Button size="sm" variant="outline" className="text-xs h-6">
                    Mark Done
                  </Button>
                </div>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-medium text-sm text-green-800">Great Problem Solving</h4>
                <p className="text-xs text-green-700 mt-1">Your analytical approach was excellent today</p>
                <span className="text-xs text-green-600">From meeting</span>
              </div>

              <div className="text-center pt-2">
                <Link href="/dashboard/personal-insights">
                  <Button variant="outline" size="sm" className="text-xs">
                    View All Insights
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
