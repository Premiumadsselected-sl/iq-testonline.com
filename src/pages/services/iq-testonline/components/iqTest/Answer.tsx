import Image from 'next/image'

type PageProps = {
    page: number;
    picture: string
};
export default function Answer({ page, picture }: PageProps) {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xl p-5">
            <span className='text-sm md:text-xl text-customGray font-bold'>{picture.toUpperCase()}</span>
            <Image
                className='mt-4'
                src={`/assets/imagesTest/step${page}/${picture}.png`}
                alt={`step${page}/${picture}.png`}
                width={500}
                height={500}
            // layout='responsive'
            />
        </div>
    );
}