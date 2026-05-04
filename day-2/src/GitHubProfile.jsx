import React, { useEffect, useState } from "react";
import "./GitHubProfile.css";

const GitHubProfile = () => {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        setisLoading(true);
        const response = await fetch(
          "https://api.github.com/users/Archiviste-Ken",
        );
        const data = await response.json();
        console.log(data);
        
        setData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setisLoading(false);
      }
    };

    fetchGithubData();
  }, []);

  if (isLoading) {
    return (
      <div className="github-container">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="github-container">
      {data && (
        <div className="profile-card">
          {/* Avatar */}
          <img src={data.avatar_url} alt={data.name} className="avatar" />

          {/* Name */}
          <h1 className="profile-name">{data.name || data.login}</h1>

          {/* Username */}
          <p className="profile-username">@{data.login}</p>

          {/* Bio */}
          {data.bio && <p className="profile-bio">{data.bio}</p>}

          {/* Stats */}
          <div className="stats-container">
            <div className="stat">
              <div className="stat-value">{data.public_repos}</div>
              <div className="stat-label">Repos</div>
            </div>
            <div className="stat">
              <div className="stat-value">{data.followers}</div>
              <div className="stat-label">Followers</div>
            </div>
            <div className="stat">
              <div className="stat-value">{data.following}</div>
              <div className="stat-label">Following</div>
            </div>
          </div>

          {/* Location & Company */}
          <div className="info-section">
            {data.location && (
              <div className="info-item">📍 {data.location}</div>
            )}
            {data.company && <div className="info-item">💼 {data.company}</div>}
            {data.blog && (
              <div className="info-item">
                🔗{" "}
                <a
                  href={data.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-link"
                >
                  {data.blog}
                </a>
              </div>
            )}
          </div>

          {/* GitHub Button */}
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-button"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default GitHubProfile;
