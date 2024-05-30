
import Image from 'next/image'

type PageProps = {
    page: number;
};

export default function Question({ page }: PageProps) {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 p-5">
            <Image
                src={`/assets/imagesTest/step${page}/question.png`}
                alt={`question${page}.png`}
                width={718}
                height={718}
            />
        </div>
    );
}