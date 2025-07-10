import { Card } from "./Card"

export const Slider = () => {
    const cards = [{
        title: "Social Media Journalism",
        image: "pt-image-1.png",
        paragraph: "Give journalists the tools they need to handle the shifting environment of audience interaction on social media platforms."
    }, {
        title: "Fact-Checking & Verification",
        image: "pt-image-2.png",
        paragraph: "Equip journalists with the skills to verify information and combat misinformation effectively."
    }, {
        title: "Press Freedom",
        image: "pt-image-3.png",
        paragraph: "Advocate for the rights of journalists and the importance of a free press in society."
    }]

    return (
        <div className="tw-relative tw-overflow-hidden">
            <div className="tw-overflow-x-hidden">
                <div className="tw-flex tw-transition-transform tw-duration-300 tw-gap-8 tw-w-full tw-h-[604px] tw-pl-[150px] tw-pr-[150px] tw-translate-x-0">
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
        </div>
    )
}