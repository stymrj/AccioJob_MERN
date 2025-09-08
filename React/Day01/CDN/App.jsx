// import { Toaster } from "@/components/ui/toaster"
// import { Sonner } from "@/components/ui/sonner"
// import { TooltipProvider } from "@/components/ui/tooltip"
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import { BrowserRouter, Routes, Route } from "react-router-dom"

// import { useAuth } from "@/hooks/useAuth"
// import { Navbar } from "@/components/Navbar"
// import { Sidebar } from "@/components/Sidebar"
// import { Dashboard } from "@/pages/Dashboard"
// import { Jobs } from "@/pages/Jobs"
// import { Resources } from "@/pages/Resources"
// import { Tracker } from "@/pages/Tracker"
// import { Profile } from "@/pages/Profile"
// import { Settings } from "@/pages/Settings"
// import { Login } from "@/pages/Login"
// import { Register } from "@/pages/Register"
// import { NotFound } from "@/pages/NotFound"

// const queryClient = new QueryClient()

// export default function App() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <Navbar />
//           <Sidebar />
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/jobs" element={<Jobs />} />
//             <Route path="/resources" element={<Resources />} />
//             <Route path="/tracker" element={<Tracker />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/settings" element={<Settings />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   )
// }
