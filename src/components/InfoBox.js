import React from 'react';

const InfoBox = ({ selectedQuality, selectedImmutability, selectedCompatibility }) => {
    const explanations = {
        quality: {
            Optimal: 'Optimal quality aims for the best possible visual and audio fidelity, often resulting in larger file sizes. This is ideal for users who have ample storage and want the best viewing experience.',
            Transparent: 'Transparent quality strikes a balance between file size and quality. It allows for more formats and encodings than Optimal, including some that are more efficient in terms of storage. This is a good choice for users who want good quality but also need to manage their storage.',
            Balanced: 'Balanced quality is a compromise between file size, quality, and compatibility. It allows for a wider range of formats and encodings, and it may prioritize sources that offer a good balance of these factors. This is suitable for users who want a balance between quality, file size, and compatibility.',
            Minimal: 'Minimal quality prioritizes small file size over everything else. It allows for the most efficient formats and encodings, even if they result in a noticeable loss of quality. This is ideal for users who have very limited storage or bandwidth.'
        },
        immutability: {
            Hard: 'Hard immutability means that once a file is downloaded, it will not be replaced by another version. This is ideal for users who don\'t want to micro manage their library. More suited to torrent users who want to seed. Needed less for Usenet users who don\'t need to seed.',
            Moderate: 'Moderate immutability allows for some flexibility. A file might be replaced by a better version under certain conditions, such as a significant source upgrade - i.e. WEB -> Bluray. This is a good choice for users who want some level of upgrade but still value stability.',
            Soft: 'Soft immutability allows for a file to be replaced by a better version if one becomes available (by the standards of the profile). This is suitable for users who always want the best possible version of a file, even if it means replacing files they\'ve already downloaded multiple times.'
        },
        compatibility: {
            Legacy: 'Legacy compatibility prioritizes support for older systems and formats. This is ideal for users who are using older hardware or software that may not support the latest formats and encodings. No x265, no HDR, no Dolby Vision, no Lossless audio.',
            Standard: 'Standard compatibility strikes a balance between supporting older systems and taking advantage of newer technologies. This is a good choice for users who are using relatively recent hardware or software, but not necessarily the latest. Allows most formats, but there options to limit things such as lossless audio, hdr and x265',
            'Bleeding Edge': 'Bleeding Edge compatibility prioritizes support for the latest systems and formats, potentially at the expense of compatibility with older systems. This is suitable for users who are using the latest hardware or software and want to take full advantage of it. Almost no restrictions, other than newer codecs like AV-1.'
        },
    };

    return (
        <div className="info-box">
            <h3 className="info-box-title">Your Choices</h3>
            <div className="info-box p-3 mb-3 border border-secondary rounded bg-dark text-white">
                <div>
                    <h5 style={{ display: 'inline-block', marginRight: '10px' }}>Quality:</h5>
                    <p style={{ display: 'inline-block' }}>
                        <em>A measure of visual and audio fidelity.</em>
                    </p>
                    <p>{selectedQuality ? explanations.quality[selectedQuality] : "Click an option to learn more information about it."}</p>
                </div>
            </div>
            <div className="info-box p-3 mb-3 border border-secondary rounded bg-dark text-white">
                <div>
                    <h5 style={{ display: 'inline-block', marginRight: '10px' }}>Immutability:</h5>
                    <p style={{ display: 'inline-block' }}>
                        <em>Determines if a file might be replaced with a better version.</em>
                    </p>
                    <p>{selectedImmutability ? explanations.immutability[selectedImmutability] : "Click an option to learn more information about it."}</p>
                </div>
            </div>
            <div className="info-box p-3 mb-3 border border-secondary rounded bg-dark text-white">
                <div>
                    <h5 style={{ display: 'inline-block', marginRight: '10px' }}>Compatibility:</h5>
                    <p style={{ display: 'inline-block' }}>
                        <em>Ensures your media files work well with your devices and software.</em>
                    </p>
                    <p>{selectedCompatibility ? explanations.compatibility[selectedCompatibility] : "Click an option to learn more information about it."}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoBox;
