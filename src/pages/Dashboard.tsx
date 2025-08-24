import { Box, Flex, Image } from "@chakra-ui/react";
import { Layout } from "../components/layout/Index";
import { WelcomeBanner } from "../components/Banners/Welcome";
import { ProgressBanner } from "../components/Banners/Progress";
import { InProgress } from "../components/Courses/InProgress";
import { TopRated } from "../components/Courses/TopRated";
import { InfoCard } from "../components/User/InfoCard";
import Stats from "../assets/bg/stats.svg";
import { useQuery } from "@tanstack/react-query";
import { getTopRatedCourses, getUserProfile } from "../services/api";
const Dashboard = () => {
  const {
    data: topRatedCourses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["topRatedCourses"],
    queryFn: getTopRatedCourses,
  });
  const { data: userProfile } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getUserProfile,
  });
  console.log("Top Rated Courses:", topRatedCourses?.data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading top rated courses</div>;

  return (
    <Layout>
      <Flex gap={{ base: 4, md: 6 }}>
        <Box
          width={{ base: "100%", md: "70%" }}
          display={"flex"}
          flexDir={"column"}
          gap={{ base: 4, md: 6 }}
        >
          <WelcomeBanner firstName={userProfile?.data?.first_name || "User"} />
          <ProgressBanner completedCourses={4} coursesInProgress={3} />
          <InProgress
            id="1"
            img="https://picsum.photos/500/300?random=1"
            title="Fact Checking and Verification"
            creator="PT Academy"
            chapter={4}
            currentLesson={9}
            totalLessons={12}
          />

          <TopRated
            courses={topRatedCourses?.data || []}
            error={error}
            isLoading={isLoading}
          />
        </Box>
        <Box width={{ base: "100%", md: "28%" }}>
          <Box
            bg="#fff"
            p={{ base: 3, lg: 4, xl: 5 }}
            borderRadius="2xl"
            mb={{ base: 4, lg: 6 }}
          >
            <InfoCard />
          </Box>

          <Image src={Stats} alt="" />
        </Box>
      </Flex>
    </Layout>
  );
};

export default Dashboard;
