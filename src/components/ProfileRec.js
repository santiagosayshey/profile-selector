import React from 'react';

const ProfileRec = ({ selectedQuality, selectedImmutability, selectedCompatibility }) => {
    const profiles = {
        'OptimalHardLegacy': {
            profile: '1080p Remux (Single Grab)',
            size: '20 - 40gb',
            comment: 'Prioritises 1080p h264 bluray remuxes. Lossless audio preffered, lossy audio banned. HDR bannned. No upgrades allowed.'
        },
        'OptimalHardStandard': {
            profile: '4k WEB-DL (Single Grab)',
            size: '20 - 30gb',
            comment: 'Prioritises tier 1 WEB-DLs - AMZN, MA, APTV. Allows fallback to lower tier web sources. Lossless audio allowed, but lossy audio is preferred. All types of HDR is allowed, with the option to ban Dolby Vision w/out fallback. No upgrades allowed.'

        },
        'OptimalHardBleeding Edge': {
            profile: '4k Remux (Single Grab)',
            size: '> 50gb',
            comment: 'Prioritises 4k h265 UHD bluray remuxes. Lossless audio preffered, lossy audio banned. HDR allowed, DV without fallback banned. No upgrades allowed.'
        },
        'OptimalModerateLegacy': {
            profile: '1080p Remux (Double Grab)',
            size: '20 - 40gb',
            comment: 'Prioritises 1080p h264 bluray remuxes. Lossless audio preffered, lossy audio banned. HDR bannned. 1 upgrade allowed from web -> bluray'
        },
        'OptimalModerateStandard': {
            profile: '4k WEB-DL',
            size: '20 - 30gb',
            comment: 'Prioritises tier 1 WEB-DLs - AMZN, MA, APTV. Allows fallback to lower tier web sources. Lossless audio allowed, but lossy audio is preferred. All types of HDR is allowed, with the option to ban Dolby Vision w/out fallback.'
        },
        'OptimalModerateBleeding Edge': {
            profile: '4k Remux (Double Grab)',
            size: '> 50gb',
            comment: 'Prioritises 4k h265 UHD bluray remuxes. Lossless audio preffered, lossy audio banned. HDR allowed, DV without fallback banned. 1 upgrade allowed from web -> bluray'
        },
        'OptimalSoftLegacy': {
            profile: '1080p Remux',
            size: '30 - 40gb',
            comment: 'Prioritises 1080p h264 bluray remuxes. Lossless audio preffered, lossy audio banned. HDR bannned. All upgrades allowed'
        },
        'OptimalSoftStandard': {
            profile: '4k x265 Encode',
            size: '20-40gb',
            comment: '4k Bluray / Webrip x265 Encode, with fallback to a 4k WEB-DL. h265, lossless audio, HDR allowed. All upgrades allowed.'
        },
        'OptimalSoftBleeding Edge': {
            profile: '4k Remux',
            size: '> 50gb',
            comment: 'Prioritises 4k h265 UHD bluray remuxes. Lossless audio preffered, lossy audio banned. HDR allowed, DV without fallback banned. All upgrades allowed'
        },
        'TransparentHardLegacy': {
            profile: '1080p x264 Encode (Single Grab)',
            size: '10 - 15gb',
            comment: '1080p Bluray or WEBRIP prioritised. Allows fallback to a 1080p WEB-DL. x264 only. Lossy audio. No upgrades allowed. No HDR.'
        },
        'TransparentHardStandard': {
            profile: '1080p x265 Encode (Single Grab)',
            size: '5 - 10gb',
            comment: '1080p Bluray or WEBRIP, with fallback to a 1080p WEB-DL. x265 preferred, fallback to x264. Lossy or lossless audio. No upgrades allowed. No HDR.'
        },
        'TransparentHardBleeding Edge': {
            profile: '1080p x265 HDR Encode (Single Grab)',
            size: '15 - 20gb',
            comment: '1080p Bluray or WEBRIP prioritised. Allows fallback to a 1080p WEB-DL. x265 preferred, fallback to x264. Lossy or lossless audio. No upgrades allowed. HDR allowed.'
        },
        'TransparentModerateLegacy': {
            profile: '1080p x264 Encode (Double Grab)',
            size: '10 - 15gb',
            comment: '1080p Bluray or WEBRIP prioritsed Golden Popcorns. Allows fallback to a 1080p WEB-DL. x264 only. Lossy audio 1 upgrade allowed from web -> bluray. No HDR.'
        },
        'TransparentModerateStandard': {
            profile: '1080p x265 Encode (Double Grab)',
            size: '5 - 10gb',
            comment: '1080p Bluray or WEBRIP, with fallback to a 1080p WEB-DL. x265 preferred, fallback to x264. Lossy or lossless audio. 1 upgrade allowed from web -> bluray. No HDR.'
        },
        'TransparentModerateBleeding Edge': {
            profile: '1080p x265 HDR Encode (Double Grab)',
            size: '15 - 20gb',
            comment: '1080p Bluray or WEBRIP prioritsed Golden Popcorns. Allows fallback to a 1080p WEB-DL. x265 preferred, fallback to x264. Lossy or lossless audio. 1 upgrade allowed from web -> bluray. HDR allowed.'
        },
        'TransparentSoftLegacy': {
            profile: '1080p x264 Encode',
            size: '10 - 15gb',
            comment: '1080p Bluray or WEBRIP prioritsed Golden Popcorns. Allows fallback to a 1080p WEB-DL. x264 only. Lossy audio. All upgrades allowed. No HDR.'
        },
        'TransparentSoftStandard': {
            profile: '1080p x265 Encode',
            size: '5 - 10gb',
            comment: '1080p Bluray or WEBRIP, with fallback to a 1080p WEB-DL. x265 preferred, fallback to x264. Lossy or lossless audio. All upgrades allowed. No HDR.'
        },
        'TransparentSoftBleeding Edge': {
            profile: '1080p x265 HDR Encode',
            size: '15 - 20gb',
            comment: '1080p Bluray or WEBRIP, with fallback to a 1080p WEB-DL. x265 preferred, fallback to x264. Lossy or lossless audio. All upgrades allowed. HDR allowed.'
        },
        'BalancedHardLegacy': {
            profile: '1080p WEB-DL (Single Grab)',
            size: '5 - 10gb',
            comment: 'Single grab from the currently highest tier available WEB source.'
        },
        'BalancedHardStandard': {
            profile: '1080p WEB-DL (Single Grab)',
            size: '5 - 10gb',
            comment: 'Single grab from the currently highest tier available WEB source.'
        },
        'BalancedHardBleeding Edge': {
            profile: '1080p x265 WEB-DL (Single Grab)',
            size: '4 - 8gb',
            comment: 'x265 preferred, fallback to x264. Single grab from a web source.'
        },
        'BalancedModerateLegacy': {
            profile: 'N/A',
            size: 'N/A',
            comment: 'Too similar to next Balanced + Moderate + Standard.'
        },
        'BalancedModerateStandard': {
            profile: '1080p WEB-DL',
            size: '5 - 10gb',
            comment: '1080p WEB-DLs preferred. Also allows BHDstudio bluray Encodes, which are ranked equally to tier 1 web sources. Fallback to lower tier web sources, all upgrades allowed.'
        },
        'BalancedModerateBleeding Edge': {
            profile: '1080p h265 WEB-DL',
            size: '4 - 8gb',
            comment: '1080p h265 WEB-DLs preferred, fallback to 1080p h264 WEB-DLs. All upgrades allowed.'
        },
        'BalancedSoftLegacy': {
            profile: '720p x264 Encode',
            size: '5 - 10gb',
            comment: 'Prioritises 720p Golden Popcorn Encodes. Lossy audio only, has fallback to 1080p WEB-DLs. 720p WEB-DLs are too LQ.'
        },
        'BalancedSoftStandard': {
            profile: '1080p WEB-DL',
            size: '5 - 10gb',
            comment: '1080p WEB-DLs preferred. Also allows BHDstudio bluray Encodes, which are ranked equally to tier 1 web sources. Fallback to lower tier web sources, all upgrades allowed.'
        },
        'BalancedSoftBleeding Edge': {
            profile: '1080p h265 WEB-DL',
            size: '4 - 8gb',
            comment: '1080p h265 WEB-DLs preferred, fallback to 1080p h264 WEB-DLs. All upgrades allowed.'
        },
        'MinimalHardLegacy': {
            profile: 'SD Xvid Encodes',
            size: '< 3gb',
            comment: 'SD Xvid only, always smaller than 3gb. No upgrades allowed.'
        },
        'MinimalHardStandard': {
            profile: 'SD x264 Encodes',
            size: '< 3gb',
            comment: 'SD x264 only, always smaller than 3gb. No upgrades allowed.'
        },
        'MinimalHardBleeding Edge': {
            profile: 'Micro x265 Encodes',
            size: '< 3gb',
            comment: 'Any resolution is allowed, as long as it\'s below 3gb. Prioritises x265, but has fallback to x264.'
        },
        'MinimalModerateLegacy': {
            profile: 'SD Xvid Encodes',
            size: '< 3gb',
            comment: 'SD only, xvid only, always smaller than 3gb. No upgrades needed.'
        },
        'MinimalModerateStandard': {
            profile: 'SD x264 Encodes',
            size: '< 3gb',
            comment: 'SD only, x264 only, always smaller than 3gb. No upgrades needed.'
        },
        'MinimalModerateBleeding Edge': {
            profile: 'Micro x265 Encodes',
            size: '< 3gb',
            comment: 'Any resolution, always smaller than 3gb. No upgrades needed.'
        },
        'MinimalSoftLegacy': {
            profile: 'SD Xvid Encodes',
            size: '< 3gb',
            comment: 'SD only, xvid only, always smaller than 3gb. No upgrades needed.'
        },
        'MinimalSoftStandard': {
            profile: 'SD x264 Encodes',
            size: '< 5gb',
            comment: 'SD only, x264 only, always smaller than 3gb. No upgrades needed.'
        },
        'MinimalSoftBleeding Edge': {
            profile: 'Micro x265 Encodes',
            size: '< 2gb',
            comment: 'Any resolution, always smaller than 3gb. No upgrades needed.'
        }
    };

    const key = `${selectedQuality}${selectedImmutability}${selectedCompatibility}`;
    const profile = profiles[key];

    // Generate the link URL
    const linkUrl = profile ? `https://dictionarry.pages.dev/Profiles/${profile.profile.replace(/ /g, '')}` : '';

    const renderProfileInfo = () => {
        if (!profile || profile.profile === 'N/A') {
            return (
                <div className="alert alert-warning" role="alert">
                    No profile exists for this combination. Please select a different combination.
                </div>
            );
        }

        return (
            <div className="profile-info">
                <h5 className="profile-title">{profile.profile}</h5>
                <p className="profile-detail"><strong>Projected Size:</strong> {profile.size}</p>
                <p className="profile-detail"><strong>Description:</strong> {profile.comment}</p>
                <p className="profile-detail">
                    <a className="profile-link" href={linkUrl} target="_blank" rel="noopener noreferrer">Link - {profile.profile}</a>

                </p>
            </div>
        );
    };

    return (
        <div className="container mt-3 info-box">
            <h3 className="info-box-title">Recommended Profile</h3>
            <div className="info-content p-3 mb-3 border border-secondary rounded bg-dark text-white">
                {renderProfileInfo()}
            </div>
        </div>
    );
};

export default ProfileRec;