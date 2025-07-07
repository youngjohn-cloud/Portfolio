export default function ButtonLink({
  title,
  path,
  transparent,
  download,
}: {
  title: string;
  path?: string;
  transparent?: boolean;
  download?: string | boolean;
}) {
  return (
    <a
      href={path}
      className={`px-4 py-2 max-sm:py-3 rounded-full block text-xs font-[550] ring-[0.7px] ring-greenAccent ${
        transparent ? "dark:text-lightGray" : "bg-greenAccent"
      } text-center`}
      download={download}
    >
      {title}
    </a>
  );
}
