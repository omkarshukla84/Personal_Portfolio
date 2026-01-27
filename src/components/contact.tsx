import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-yellow-400 text-black border-t-4 border-black relative">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-black drop-shadow-[2px_2px_0px_rgba(255,255,255,1)] uppercase mb-8">
          World 8-4: Contact
        </h2>
        
        <p className="text-lg mb-8 font-sans font-bold">
            Ready to start a new game? Let&apos;s build something awesome together.
        </p>

        <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <form className="space-y-4 text-left">
                <div>
                    <label className="block text-sm font-bold mb-2 uppercase text-black">Player Name</label>
                    <input type="text" className="w-full bg-gray-100 border-2 border-black p-2 text-black font-sans focus:outline-none focus:border-red-500" placeholder="Mario" />
                </div>
                 <div>
                    <label className="block text-sm font-bold mb-2 uppercase text-black">Message</label>
                    <textarea className="w-full bg-gray-100 border-2 border-black p-2 text-black font-sans focus:outline-none focus:border-red-500 h-32" placeholder="Your quest details..."></textarea>
                </div>
                <Button variant="pixels" className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white border-black">
                    Start Game
                </Button>
            </form>
        </div>
      </div>
    </section>
  );
}
