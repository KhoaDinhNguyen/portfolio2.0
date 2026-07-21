const BUTTON_BASE = "flex items-center gap-2 px-5 py-2.5 font-semibold rounded transition-all duration-200 text-sm w-full w-full sm:w-auto justify-center";
const BUTTON_PRIMARY = `${BUTTON_BASE} bg-primary text-white hover:bg-blue-500 hover:scale-110`;
const BUTTON_OUTLINE = `${BUTTON_BASE} border border-border text-foreground hover:border-primary hover:text-primary`;
const BUTTON_SECONDARY = `${BUTTON_BASE} border border-border text-muted-foreground font-semibold rounded hover:border-accent hover:text-accent`

export const BUTTON = {
  BUTTON_BASE,
  BUTTON_PRIMARY,
  BUTTON_OUTLINE,
  BUTTON_SECONDARY
}