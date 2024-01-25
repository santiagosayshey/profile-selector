import React from 'react';

const ProfileRec = ({ selectedQuality, selectedImmutability, selectedCompatibility }) => {
    const profiles = {
        'OptimalHardLegacy': {
            profile: '2160p Balanced (Single Grab)',
            size: '20 - 30gb',
            comment: 'Prioritizes 2160p WEB-DLs with a single grab. Lossless audio is preferred, and HDR is banned. No upgrades allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/2160p Balanced'
        },
        'OptimalHardStandard': {
            profile: '1080p Optimal (Single Grab)',
            size: '30 - 40gb',
            comment: 'Prioritizes 1080p remuxes with a single grab. Lossless audio is allowed, but lossy audio is preferred. No upgrades allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p Optimal'
        },
        'OptimalHardBleeding Edge': {
            profile: '2160p Optimal (Single Grab)',
            size: '> 50gb',
            comment: 'Prioritizes 2160p remuxes with a single grab. Lossless audio is preferred, and HDR is allowed, but Dolby Vision without fallback is banned. No upgrades allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/2160p Optimal'
        },
        'OptimalModerateLegacy': {
            profile: '2160p Balanced',
            size: '20 - 30gb',
            comment: 'Prioritizes 2160p WEB-DLs. Lossless audio is preferred, and HDR is banned. No upgrades allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/2160p Balanced'
        },
        'OptimalModerateStandard': {
            profile: '1080p Optimal (Double Grab)',
            size: '30 - 40gb',
            comment: 'Prioritizes 1080p remuxes with a double grab. Lossless audio is allowed, but lossy audio is preferred. One upgrade is allowed from web to bluray.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p Optimal'
        },
        'OptimalModerateBleeding Edge': {
            profile: '2160p Optimal (Double Grab)',
            size: '> 50gb',
            comment: 'Prioritizes 2160p remuxes with a double grab. Lossless audio is preferred, and HDR is allowed, but Dolby Vision without fallback is banned. One upgrade is allowed from web to bluray.',
            link: 'https://dictionarry.pages.dev/Profiles/2160p Optimal'
        },
        'OptimalSoftLegacy': {
            profile: '2160p Transparent',
            size: '20-40gb',
            comment: 'Prioritizes 2160p transparent releases. Lossless audio is preferred, and HDR is banned. All upgrades are allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/2160p Transparent'
        },
        'OptimalSoftStandard': {
            profile: '1080p Optimal',
            size: '30 - 40gb',
            comment: 'Prioritizes 1080p remuxes. Lossless audio is preferred, and HDR is banned. All upgrades are allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p Optimal'
        },
        'OptimalSoftBleeding Edge': {
            profile: '2160p Optimal',
            size: '> 50gb',
            comment: 'Prioritizes 2160p remuxes. Lossless audio is preferred, and HDR is allowed, but Dolby Vision without fallback is banned. All upgrades are allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/2160p Optimal'
        },
        'TransparentHardLegacy': {
            profile: '1080p Transparent (Single Grab)',
            size: '10 - 15gb',
            comment: 'Prioritizes 1080p transparent releases with a single grab. Lossy audio is allowed, and HDR is banned. No upgrades allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p Transparent'
        },
        'TransparentHardStandard': {
            profile: '1080p x265 Transparent (Single Grab)',
            size: '5 - 10gb',
            comment: 'Prioritizes 1080p x265 transparent releases with a single grab. Lossy or lossless audio is allowed, and HDR is banned. No upgrades allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p x265 Transparent'
        },
        'TransparentHardBleeding Edge': {
            profile: '1080p HDR Transparent (Single Grab)',
            size: '15 - 20gb',
            comment: 'Prioritizes 1080p HDR transparent releases with a single grab. Lossy or lossless audio is allowed, and HDR is allowed. No upgrades allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p HDR Transparent'
        },
        'TransparentModerateLegacy': {
            profile: '1080p Transparent (Double Grab)',
            size: '10 - 15gb',
            comment: 'Prioritizes 1080p transparent releases with a double grab. Lossy audio is allowed, and HDR is banned. One upgrade is allowed from web to bluray.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p Transparent'
        },
        'TransparentModerateStandard': {
            profile: '1080p x265 Transparent (Double Grab)',
            size: '5 - 10gb',
            comment: 'Prioritizes 1080p x265 transparent releases with a double grab. Lossy or lossless audio is allowed, and one upgrade is allowed from web to bluray. HDR is banned.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p x265 Transparent'
        },
        'TransparentModerateBleeding Edge': {
            profile: '1080p HDR Transparent (Double Grab)',
            size: '15 - 20gb',
            comment: 'Prioritizes 1080p HDR transparent releases with a double grab. Lossy or lossless audio is allowed, and one upgrade is allowed from web to bluray. HDR is allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p HDR Transparent'
        },
        'TransparentSoftLegacy': {
            profile: '1080p Transparent',
            size: '10 - 15gb',
            comment: 'Prioritizes 1080p transparent releases. Lossy audio is allowed, and all upgrades are allowed. HDR is banned.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p Transparent'
        },
        'TransparentSoftStandard': {
            profile: '1080p x265 Transparent',
            size: '5 - 10gb',
            comment: 'Prioritizes 1080p x265 transparent releases. Lossy or lossless audio is allowed, and all upgrades are allowed. HDR is banned.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p x265 Transparent'
        },
        'TransparentSoftBleeding Edge': {
            profile: '1080p HDR Transparent',
            size: '15 - 20gb',
            comment: 'Prioritizes 1080p HDR transparent releases. Lossy or lossless audio is allowed, and all upgrades are allowed. HDR is allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p HDR Transparent'
        },
        'BalancedHardLegacy': {
            profile: '1080p Balanced (Single Grab)',
            size: '5 - 10gb',
            comment: 'Prioritizes 1080p WEB-DLs with a single grab from the highest tier available web source.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p Balanced'
        },
        'BalancedHardStandard': {
            profile: '1080p Balanced (Single Grab)',
            size: '5 - 10gb',
            comment: 'Prioritizes 1080p WEB-DLs with a single grab from the highest tier available web source.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p Balanced'
        },
        'BalancedHardBleeding Edge': {
            profile: '1080p h265 Balanced (Single Grab)',
            size: '4 - 8gb',
            comment: 'Prioritizes 1080p h265 WEB-DLs with a single grab. x265 is preferred, with fallback to x264.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p h265 Balanced'
        },
        'BalancedModerateLegacy': {
            profile: '1080p Balanced',
            size: '5 - 10gb',
            comment: 'Prioritizes 1080p WEB-DLs. Allows BHDstudio bluray encodes, which are ranked equally to tier 1 web sources. Fallback to lower tier web sources is allowed, and all upgrades are allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p Balanced'
        },
        'BalancedModerateStandard': {
            profile: '1080p Balanced',
            size: '5 - 10gb',
            comment: 'Prioritizes 1080p WEB-DLs. Allows BHDstudio bluray encodes, which are ranked equally to tier 1 web sources. Fallback to lower tier web sources is allowed, and all upgrades are allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p Balanced'
        },
        'BalancedModerateBleeding Edge': {
            profile: '1080p h265 Balanced',
            size: '4 - 8gb',
            comment: 'Prioritizes 1080p h265 WEB-DLs, with fallback to 1080p h264 WEB-DLs. All upgrades are allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p h265 Balanced'
        },
        'BalancedSoftLegacy': {
            profile: '720p Transparent',
            size: '5 - 10gb',
            comment: 'Prioritizes 720p x264 Golden Popcorn encodes. Lossy audio only, with fallback to 1080p WEB-DLs. 720p WEB-DLs are considered too low quality.',
            link: 'https://dictionarry.pages.dev/Profiles/720p Transparent'
        },
        'BalancedSoftStandard': {
            profile: '720p Transparent',
            size: '5 - 10gb',
            comment: 'Prioritizes 720p x264 Golden Popcorn encodes. Lossy audio only, with fallback to 1080p WEB-DLs. 720p WEB-DLs are considered too low quality.',
            link: 'https://dictionarry.pages.dev/Profiles/720p Transparent'
        },
        'BalancedSoftBleeding Edge': {
            profile: '1080p h265 Balanced',
            size: '4 - 8gb',
            comment: 'Prioritizes 1080p h265 WEB-DLs, with fallback to 1080p h264 WEB-DLs. All upgrades are allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/1080p h265 Balanced'
        },
        'MinimalHardLegacy': {
            profile: 'SD Legacy',
            size: '< 1gb',
            comment: 'Prioritizes SD Legacy releases, always smaller than 1gb. No upgrades allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/SD Legacy'
        },
        'MinimalHardStandard': {
            profile: 'SD Transparent',
            size: '< 5gb',
            comment: 'Prioritizes SD Transparent releases, always smaller than 5gb. No upgrades allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/SD Transparent'
        },
        'MinimalHardBleeding Edge': {
            profile: 'Micro Encodes',
            size: '< 3gb',
            comment: 'Prioritizes Micro Encodes with any resolution below 3gb. x265 is preferred, but fallback to x264 is allowed.',
            link: 'https://dictionarry.pages.dev/Profiles/Micro Encodes'
        },
        'MinimalModerateLegacy': {
            profile: 'SD Legacy',
            size: '< 1gb',
            comment: 'Prioritizes SD Legacy releases, always smaller than 1gb. No upgrades needed.',
            link: 'https://dictionarry.pages.dev/Profiles/SD Legacy'
        },
        'MinimalModerateStandard': {
            profile: 'SD Transparent',
            size: '< 5gb',
            comment: 'Prioritizes SD Transparent releases, always smaller than 5gb. No upgrades needed.',
            link: 'https://dictionarry.pages.dev/Profiles/SD Transparent'
        },
        'MinimalModerateBleeding Edge': {
            profile: 'Micro Encodes',
            size: '< 3gb',
            comment: 'Prioritizes Micro Encodes with any resolution below 3gb. No upgrades needed.',
            link: 'https://dictionarry.pages.dev/Profiles/Micro Encodes'
        },
        'MinimalSoftLegacy': {
            profile: 'SD Legacy',
            size: '< 1gb',
            comment: 'Prioritizes SD Legacy releases, always smaller than 1gb. No upgrades needed.',
            link: 'https://dictionarry.pages.dev/Profiles/SD Legacy'
        },
        'MinimalSoftStandard': {
            profile: 'SD Transparent',
            size: '< 5gb',
            comment: 'Prioritizes SD Transparent releases, always smaller than 5gb. No upgrades needed.',
            link: 'https://dictionarry.pages.dev/Profiles/SD Transparent'
        },
        'MinimalSoftBleeding Edge': {
            profile: 'Micro Encodes',
            size: '< 3gb',
            comment: 'Prioritizes Micro Encodes with any resolution below 3gb. No upgrades needed.',
            link: 'https://dictionarry.pages.dev/Profiles/Micro Encodes'
        }
    };

    const key = `${selectedQuality}${selectedImmutability}${selectedCompatibility}`;
    const profile = profiles[key];


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
                    <a className="profile-link" href={profile.link} target="_blank" rel="noopener noreferrer">Link - {profile.profile}</a>

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