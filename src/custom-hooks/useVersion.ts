import { useParams } from "react-router-dom";

const useVersion = (): number => {
  const { _version_ } = useParams<{ _version_: string }>();
  const parsedVersion = parseInt(_version_!, 10);

  return parsedVersion;
};

export default useVersion;
