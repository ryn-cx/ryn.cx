from yt_dlapi import YTDLAPI

client = YTDLAPI()

# A single video, by video ID.
video = client.video.get("jNQXAC9IVRw")

# A channel, by handle/name or by channel ID.
channel = client.channel.get_by_name("jawed")
channel = client.channel.get_by_id("UC4QobU6STFB0P71PMvOGN5A")

# A playlist, by playlist ID.
playlist = client.playlist.get("PLuhl9TnQPDCnWIhy_KSbtFwXVQnNvgfSh")

# The videos in a playlist. Accepts a normal playlist ID (PL...) or a
# channel-derived uploads playlist ID (UU...).
videos = client.playlist_videos.get("UU4QobU6STFB0P71PMvOGN5A")
