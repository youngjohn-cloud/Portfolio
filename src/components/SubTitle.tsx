export default function ({ title }: { title: string }) {
  return (
    <div className="text-lg font-medium dark:text-lightGray max-sm:text-center">
      <p>{title}</p>
    </div>
  );
}
