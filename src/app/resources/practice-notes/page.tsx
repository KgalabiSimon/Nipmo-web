"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState, useMemo } from "react"
import Header from "@/components/Header"

// Practice Notes data structure
interface PracticeNote {
  id: number;
  date: string;
  number: string;
  title: string;
  downloadUrl?: string;
}

// Practice Notes data based on the original NIPMO site
const practiceNotes: PracticeNote[] = [
  {
    id: 1,
    date: "04 Dec 2012",
    number: "1 of 2012",
    title: "Practice Note To Guideline 1 Of 2012",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_0b000f830b0d467aa669be894388eb2f.pdf"
  },
  {
    id: 2,
    date: "07 Mar 2017",
    number: "2 of 2017",
    title: "Dispute Resolution Procedures",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_4b54a74273204f0bbe1c9667192fb581.pdf"
  },
  {
    id: 3,
    date: "16 Apr 2021",
    number: "4.2 of 2021",
    title: "Referral Of Intellectual Property To NIPMO On An IP1 Form",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_d3bc3b29ab3d4860ac5bf74383da97e1.pdf"
  },
  {
    id: 4,
    date: "29 Mar 2021",
    number: "5.2 of 2021",
    title: "Intellectual Property Status And Commercialisation Reports Reported To NIPMO On An IP7 Form",
    downloadUrl: "https://www.nipmo.org/_files/ugd/fcb033_d73e3f2f81cd45f5b4161eba6abb67d0.pdf"
  }
]

export default function PracticeNotes() {
      const [searchQuery, setSearchQuery] = useState("")

  

  

  // Filter practice notes based on search query
  const filteredNotes = useMemo(() => {
    if (!searchQuery.trim()) return practiceNotes

    return practiceNotes.filter(note =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.date.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Practice Notes Content - Clean White Design */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header and Search */}
            <div className="mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Practice Notes
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Search and browse through our comprehensive collection of practice notes and recommendations.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <Input
                  type="text"
                  placeholder="Search practice notes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a4ba36] focus:border-[#a4ba36] w-full"
                />
              </div>

              {/* Results Count */}
              <p className="mt-4 text-sm text-gray-500">
                {filteredNotes.length} of {practiceNotes.length} practice notes found
              </p>
            </div>

            {/* Practice Notes Grid */}
            {filteredNotes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredNotes.map((note) => (
                  <Card key={note.id} className="bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 h-full flex flex-col overflow-hidden">
                    {/* Top Half - Image covering full width and height */}
                    <div className="relative h-48 w-full">
                      <img
                        src="https://ext.same-assets.com/4026891959/1120320380.png"
                        alt="NIPMO Practice Notes"
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    </div>

                    {/* Bottom Half - Content */}
                    <CardContent className="p-4 flex flex-col flex-1">
                      <p className="text-xs text-gray-500 mb-1">{note.date}</p>
                      <p className="text-sm font-medium text-[#a4ba36] mb-2">Practice Note {note.number}</p>
                      <h3 className="text-sm font-semibold text-gray-900 leading-tight mb-4 flex-1">
                        {note.title}
                      </h3>

                      {/* Download Button */}
                      {note.downloadUrl ? (
                        <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white px-4 py-2 text-sm w-full mt-auto" asChild>
                          <a href={note.downloadUrl} target="_blank" rel="noopener noreferrer">
                            Download
                            <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </Button>
                      ) : (
                        <Button className="bg-gray-400 text-white px-4 py-2 text-sm w-full mt-auto cursor-not-allowed" disabled>
                          Coming Soon
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No practice notes found</h3>
                <p className="text-gray-500">Try adjusting your search query to find what you're looking for.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12" style={{backgroundColor: '#FFFFFF'}}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <img
                src="https://ext.same-assets.com/4026891959/417943153.jpeg"
                alt="Government Logo"
                className="h-16 w-auto mb-4"
                crossOrigin="anonymous"
              />
              <p className="text-sm text-gray-600">
                Boosting socio-economic development in South Africa through research and innovation.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/about">About NIPMO</Link></li>
                <li><Link href="/resources/guidelines">Functions</Link></li>
                <li><Link href="/news/dsti-nipmo">News & Insights</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>+27 (0) 12 843 6300</p>
                <p>info@nipmo.org.za</p>
                <p>NIPMO, Building 22, CSIR Campus, Pretoria, South Africa</p>
              </div>
              <div className="flex space-x-4 mt-4">
                <img
                  src="https://ext.same-assets.com/4026891959/4095793824.png"
                  alt="Facebook"
                  className="w-6 h-6"
                  crossOrigin="anonymous"
                />
                <svg className="w-6 h-6 fill-current text-gray-600 hover:text-gray-900 transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <img
                  src="https://ext.same-assets.com/4026891959/1180646319.png"
                  alt="LinkedIn"
                  className="w-6 h-6"
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            {/* NIPMO Logo and CTA */}
            <div className="text-center lg:text-left">
              <img
                src="https://ext.same-assets.com/4026891959/2075838640.jpeg"
                alt="NIPMO Logo"
                className="h-12 w-auto mb-4 mx-auto lg:mx-0"
                crossOrigin="anonymous"
              />
              <p className="text-sm text-gray-600 mb-4">
                Empowering South Africa through Intellectual Property and Innovation.
              </p>
              <a href="https://www.kim.nipmo.org.za/authentication/login?returnUrl=%2Fdashboard" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#a4ba36] hover:bg-[#94a632] text-white">
                  Access KIMS Now
                  <svg className="ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">© 2024 NIPMO</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
