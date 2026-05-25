import { Phone } from "lucide-react";
import { PHONE_TEL } from "../../constants/contact";
import { getWhatsAppUrl } from "../../utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

const buttonBase =
  "flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

function StickyContactBar() {
  const whatsAppUrl = getWhatsAppUrl();

  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-50 lg:hidden"
      aria-label="Quick contact options"
    >
      <div
        className="border-t border-white/20 bg-gradient-to-t from-white/95 via-white/90 to-white/80 px-4 pt-3 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-lg gap-3">
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBase} bg-[#25D366] focus-visible:outline-[#25D366]`}
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            <span>WhatsApp</span>
          </a>

          <a
            href={`tel:${PHONE_TEL}`}
            className={`${buttonBase} bg-[#0f172a] focus-visible:outline-[#0f172a]`}
            aria-label="Call now"
          >
            <Phone className="h-5 w-5 shrink-0" strokeWidth={2.25} aria-hidden />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default StickyContactBar;
