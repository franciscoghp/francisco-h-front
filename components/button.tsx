export default function Button({ processing, children, type = 'submit', onClick, className }: { type?: "submit" | "button" | "reset", processing?: boolean, children: React.ReactNode, onClick?: (args?: any) => void, className?: string }) {
  return (
    <button
      onClick={onClick}
      disabled={processing}
      type={type}
      className={`inline-flex items-center justify-center py-2.5 border border-blue-700 font-semibold text-sm text-primary tracking-wider active:bg-primary transition ease-in-out duration-150 ${processing && 'cursor-wait'} ${className}`}
    >
      {children}
    </button>
  );
}