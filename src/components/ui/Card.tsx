import { FC } from "react";

export const Card: FC<{ image: string,title:string;paragraph:string }> = ({ image,title,paragraph }) => {
    const getImageUrl = (imageName: string) => {
        if (!imageName) return '';
        return new URL(`../../assets/${imageName}`, import.meta.url).href;
    }

    const backgroundStyle = {
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 35.93%, rgba(0, 0, 0, 0.88) 100%), url('${getImageUrl(image)}') #f0f0f0 50% / cover no-repeat`
    };

    return (
        <div 
            className="tw-h-[604px] tw-rounded-[24px] tw-min-w-[584px] tw-flex-shrink-0 hover:!tw-bg-white hover:tw-border hover:tw-border-[#f0f0f0] group"
            style={backgroundStyle}
        >
            <img src={getImageUrl(image)} alt={title} className="tw-w-full tw-h-[376px] tw-object-cover tw-rounded-[24px]" />
            <div className="tw-p-6 tw-w-fit tw-min-w-[584px] tw-flex tw-flex-col tw-gap-4">
                <h3 className="tw-text-[28px] tw-capitalize tw-leading-[140%] tw-text-dark-purple">{title}</h3>
                <div className="tw-text-[23px] tw-font-normal tw-leading-[140%] tw-text-[#969696]">{paragraph}</div>
            </div>
        </div>
    )
}