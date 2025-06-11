import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SessionHistory } from "@/components/session-history"
import { Calendar, Download, Filter } from "lucide-react"

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Session History</h1>
        <p className="text-muted-foreground">Review past Scrum sessions and emotional data</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            This Week
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Data
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="all">All Sessions</TabsTrigger>
          <TabsTrigger value="frontend">Frontend Team</TabsTrigger>
          <TabsTrigger value="backend">Backend Team</TabsTrigger>
          <TabsTrigger value="design">Design Team</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Sessions</CardTitle>
              <CardDescription>Complete history of all team sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <SessionHistory />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="frontend">
          <Card>
            <CardHeader>
              <CardTitle>Frontend Team Sessions</CardTitle>
              <CardDescription>History of Frontend Team sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <SessionHistory team="frontend" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backend">
          <Card>
            <CardHeader>
              <CardTitle>Backend Team Sessions</CardTitle>
              <CardDescription>History of Backend Team sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <SessionHistory team="backend" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="design">
          <Card>
            <CardHeader>
              <CardTitle>Design Team Sessions</CardTitle>
              <CardDescription>History of Design Team sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <SessionHistory team="design" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
