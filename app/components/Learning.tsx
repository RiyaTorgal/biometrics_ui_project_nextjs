import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Eye, LogOut, Play, FileText, Download, Clock, 
  BookOpen, Video, ChevronRight, Lock, CheckCircle,
  GraduationCap, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/contexts/AuthContext";

const trainingVideos = [
  {
    id: 1,
    title: "Introduction to Multi-Omics",
    duration: "15:30",
    thumbnail: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=225&fit=crop",
    completed: true,
    locked: false,
  },
  {
    id: 2,
    title: "Genomics Fundamentals",
    duration: "22:45",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
    completed: true,
    locked: false,
  },
  {
    id: 3,
    title: "Proteomics Deep Dive",
    duration: "28:15",
    thumbnail: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=225&fit=crop",
    completed: false,
    locked: false,
  },
  {
    id: 4,
    title: "Metabolomics Applications",
    duration: "19:50",
    thumbnail: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=225&fit=crop",
    completed: false,
    locked: false,
  },
  {
    id: 5,
    title: "Advanced Data Integration",
    duration: "35:20",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
    completed: false,
    locked: true,
  },
  {
    id: 6,
    title: "Machine Learning in Omics",
    duration: "42:10",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=225&fit=crop",
    completed: false,
    locked: true,
  },
];

const studyMaterials = [
  {
    id: 1,
    title: "Multi-Omics Handbook",
    type: "PDF",
    size: "2.4 MB",
    icon: FileText,
    category: "Guide",
  },
  {
    id: 2,
    title: "Genomics Lab Protocols",
    type: "PDF",
    size: "1.8 MB",
    icon: FileText,
    category: "Protocol",
  },
  {
    id: 3,
    title: "Data Analysis Templates",
    type: "XLSX",
    size: "856 KB",
    icon: FileText,
    category: "Template",
  },
  {
    id: 4,
    title: "Sample Preparation Guide",
    type: "PDF",
    size: "3.2 MB",
    icon: FileText,
    category: "Guide",
  },
  {
    id: 5,
    title: "Statistical Methods Reference",
    type: "PDF",
    size: "4.1 MB",
    icon: FileText,
    category: "Reference",
  },
  {
    id: 6,
    title: "Case Studies Collection",
    type: "PDF",
    size: "5.7 MB",
    icon: FileText,
    category: "Case Study",
  },
];

export default function Learning() {
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const completedVideos = trainingVideos.filter(v => v.completed).length;
  const totalVideos = trainingVideos.filter(v => !v.locked).length;
  const progressPercent = (completedVideos / totalVideos) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-display font-bold text-lg text-foreground">
                  Learning Portal
                </span>
              </div>
            </Link>

            {/* Desktop User Menu */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">
                  Welcome, <span className="font-medium text-foreground">{user?.name}</span>
                </span>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={logout}
                className="text-muted-foreground hover:text-foreground"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-sm">
                    Welcome, <span className="font-medium">{user?.name}</span>
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={logout}
                  className="justify-start"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-display flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Your Learning Progress
            </CardTitle>
            <CardDescription>
              You've completed {completedVideos} of {totalVideos} available videos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={progressPercent} className="h-3" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{completedVideos} completed</span>
                <span>{Math.round(progressPercent)}%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Content Tabs */}
        <Tabs defaultValue="videos" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Training Videos
            </TabsTrigger>
            <TabsTrigger value="materials" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Study Materials
            </TabsTrigger>
          </TabsList>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingVideos.map((video) => (
                <Card 
                  key={video.id} 
                  className={`overflow-hidden transition-all duration-300 ${
                    video.locked 
                      ? "opacity-60" 
                      : "hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                      {video.locked ? (
                        <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center">
                          <Lock className="w-6 h-6 text-muted-foreground" />
                        </div>
                      ) : (
                        <Button 
                          size="icon" 
                          className="w-12 h-12 rounded-full bg-primary/90 hover:bg-primary"
                        >
                          <Play className="w-6 h-6" />
                        </Button>
                      )}
                    </div>
                    {video.completed && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-secondary text-secondary-foreground">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Completed
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-2 right-2 bg-foreground/80 text-background text-xs px-2 py-1 rounded">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-foreground flex items-center gap-2">
                      {video.title}
                      {video.locked && (
                        <Badge variant="secondary" className="text-xs">
                          Premium
                        </Badge>
                      )}
                    </h3>
                    {!video.locked && (
                      <Button 
                        variant="link" 
                        className="p-0 h-auto mt-2 text-primary"
                      >
                        {video.completed ? "Watch Again" : "Start Watching"}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Materials Tab */}
          <TabsContent value="materials">
            <ScrollArea className="h-[600px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {studyMaterials.map((material) => (
                  <Card 
                    key={material.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <material.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">
                            {material.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Badge variant="outline" className="text-xs">
                              {material.category}
                            </Badge>
                            <span>{material.type}</span>
                            <span>•</span>
                            <span>{material.size}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Download className="w-5 h-5" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
