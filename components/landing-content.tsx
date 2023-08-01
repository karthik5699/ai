"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
    {
        name: "Aryan",
        avatar: 'A',
        title: "Software Engineer",
        description: "the best ai tool for image generation"
    },
    {
        name: "David",
        avatar: 'D',
        title: "Marketing Manager",
        description: "ai has made it easy for me to create eye-catching visuals that drive engagement."
    },
    {
        name: "Lena",
        avatar: 'L',
        title: "Fashion Designer",
        description: "ai has been a game-changer for my fashion design work."
    }
        
        
]

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols">
            {testimonials.map((item) => (
                <Card key={item.name} className="bg-[#192339] border-none text-white m-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-2">
                            <div>
                                <p className="text-lg">{item.name}</p>
                                <p className="text-zinc-400 text-sm">{item.title}</p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-4 px-0">
                            {item.description}
                        </CardContent>
                    </CardHeader>
                </Card>
            ))}
        </div>
    </div>
  )
}

export default LandingContent