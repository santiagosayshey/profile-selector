import React, { useEffect, useState } from 'react';

console.log('Environment Variable:', process.env.REACT_APP_BACKEND_URL);

const ProfileRec = ({ selectedQuality, selectedImmutability, selectedCompatibility }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            const apiUrl = `${process.env.REACT_APP_BACKEND_URL}/profiles`;
            const query = `?quality=${selectedQuality}&immutability=${selectedImmutability}&compatibility=${selectedCompatibility}`;

            console.log("API URL:", apiUrl + query)

            try {
                const response = await fetch(apiUrl + query);

                const data = await response.json();
                if (data && data.length > 0) {
                    // Assuming the first profile is the desired one
                    setProfile(data[0]);
                } else {
                    setProfile(null);
                }
            } catch (error) {
                console.error("Failed to fetch profile:", error);
                setProfile(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [selectedQuality, selectedImmutability, selectedCompatibility]);

    const renderProfileInfo = () => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (!profile) {
            return (
                <div className="alert alert-warning" role="alert">
                    No profile exists for this combination. Please select a different combination.
                </div>
            );
        }

        const linkOrComingSoon = profile.available ? (
            <a className="profile-link" href={profile.link} target="_blank" rel="noopener noreferrer">Link - {profile.profile_name}</a>
        ) : (
            <span>Coming Soon!</span>
        );

        // Display detailed information
        return (
            <div className="profile-info">
                <h5 className="profile-title">{profile.profile_name}</h5>
                <p className="profile-detail"><strong>Quality:</strong> {profile.profilarr.quality}</p>
                <p className="profile-detail"><strong>Immutability:</strong> {profile.profilarr.Immutability}</p>
                <p className="profile-detail"><strong>Compatibility:</strong> {profile.profilarr.compatibility}</p>
                <p className="profile-detail"><strong>Size Range:</strong> {profile.size.min} - {profile.size.max} GB</p>
                <p className="profile-detail"><strong>Resolutions:</strong> SD: {profile.resolution.SD}, 720p: {profile.resolution["720p"]}, 1080p: {profile.resolution["1080p"]}, 4k: {profile.resolution["4k"]}</p>
                <p className="profile-detail"><strong>Codecs:</strong> h264: {profile.codecs.h264}, h265: {profile.codecs.h265}, x264: {profile.codecs.x264}, x265: {profile.codecs.x265}, av1: {profile.codecs.av1}</p>
                <p className="profile-detail"><strong>Audio:</strong> Lossy: {profile.audio.lossy ? "Priority" : "Fallback"}, Lossless: {profile.audio.lossless ? "Priority" : "Fallback"}</p>
                <p className="profile-detail"><strong>HDR:</strong> HDR: {profile.HDR.HDR ? "Yes" : "No"}, DV: {profile.HDR.DV ? "Yes" : "No"}, DV No Fallback: {profile.HDR["DV No Fallback"] ? "Yes" : "No"}</p>
                <p className="profile-detail">{linkOrComingSoon}</p>
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
