import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ControlButton = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <Button variant="outline" size="icon" className={`bg-card/80 backdrop-blur-sm rounded-full w-16 h-16 text-foreground/80 shadow-lg border-primary/20 hover:bg-primary/10 ${className}`}>
    {children}
  </Button>
);

export function GameControls() {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 flex justify-between items-end pointer-events-none md:hidden">
      {/* D-Pad */}
      <div className="grid grid-cols-3 grid-rows-3 gap-1 pointer-events-auto w-48 h-48">
        <div className="col-start-2 row-start-1 flex justify-center items-center">
          <Button variant="outline" size="icon" className="bg-card/80 backdrop-blur-sm w-14 h-14 rounded-full shadow-lg border-primary/20 hover:bg-primary/10">
            <ChevronUp />
          </Button>
        </div>
        <div className="col-start-1 row-start-2 flex justify-center items-center">
          <Button variant="outline" size="icon" className="bg-card/80 backdrop-blur-sm w-14 h-14 rounded-full shadow-lg border-primary/20 hover:bg-primary/10">
            <ChevronLeft />
          </Button>
        </div>
        <div className="col-start-3 row-start-2 flex justify-center items-center">
          <Button variant="outline" size="icon" className="bg-card/80 backdrop-blur-sm w-14 h-14 rounded-full shadow-lg border-primary/20 hover:bg-primary/10">
            <ChevronRight />
          </Button>
        </div>
        <div className="col-start-2 row-start-3 flex justify-center items-center">
          <Button variant="outline" size="icon" className="bg-card/80 backdrop-blur-sm w-14 h-14 rounded-full shadow-lg border-primary/20 hover:bg-primary/10">
            <ChevronDown />
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 pointer-events-auto">
        <ControlButton>
          <span className="font-bold text-lg">B</span>
        </ControlButton>
        <ControlButton className="bg-accent/80 text-accent-foreground border-accent/20 hover:bg-accent/20">
          <span className="font-bold text-lg">A</span>
        </ControlButton>
      </div>
    </div>
  );
}
