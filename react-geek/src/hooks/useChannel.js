import { getChannelsAPI } from "@/apis/article";
import { useEffect, useState } from "react";

// 获取 channelList 的自定义 hook
export const useChannel = () => {
  const [channelList, setChannelList] = useState([]);
  useEffect(() => {
    const fetchChannels = async () => {
      const res = await getChannelsAPI();
      setChannelList(res.data.channels);
    };
    fetchChannels();
  }, []);
  return { channelList };
};
