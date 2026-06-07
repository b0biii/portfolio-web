import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    ExternalLink,
    Star,
    GitFork,
    FileCode2,
    Github,
} from "lucide-react";
import { expDetails, colorMap, type ColorKey } from "../data";

interface ExpDialogProps {
    expId: string | null;
    onClose: () => void;
}


export default function ExpDetailDialog({expId, onClose}:  ExpDialogProps) {
    const e = expDetails .flatMap((x) => x.items).find((item) => item.id === expId);
    const c = colorMap["sky" as ColorKey];
  return (
    <Dialog open={!!expId} onOpenChange={onClose}>
      <DialogContent className = "flex flex-col max-h-[90vh] bg-[#0d1117] border border-[#21262d] shadow-2xl shadow-black/60 overflow-hidden">
        <DialogHeader>
            <div className={`rounded-lg border ${c.border} ${c.bg} p-4 mb-5`}>
                <div className="flex items-center gap-2 mb-2">
                    <FileCode2 className={`w-5 h-5 ${c.text}`} />
                    <h2 className={`text-lg font-bold font-mono ${c.text}`}>{e?.name}</h2>
                </div>
                <p className="text-xs text-[#8b949e] leading-relaxed">{e?.text}</p>
            </div>
          <DialogTitle></DialogTitle>
          <DialogDescription>
           
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-2 mb-5">
                        <div className="rounded border border-[#21262d] bg-[#0d1117] p-3 flex items-center gap-2">
                            <Star className={`w-4 h-4`} />
                            <div>
                                <div className="text-sm font-bold text-white">{e?.note}</div>
                                <div className="text-[10px] text-[#484f58] uppercase tracking-wider">Stars</div>
                            </div>
                        </div>
                        <div className="rounded border border-[#21262d] bg-[#0d1117] p-3 flex items-center gap-2">
                            <GitFork className={`w-4 h-4 ${c.text}`} />
                            <div>
                                <div className="text-sm font-bold text-white">{e?.duration}</div>
                                <div className="text-[10px] text-[#484f58] uppercase tracking-wider">Forks</div>
                            </div>
                        </div>
                    </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
