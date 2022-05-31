import "./styles.css";
import { Button } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { VStack, HStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import {
  ChevronRightIcon,
  SettingsIcon,
  StarIcon,
  DragHandleIcon,
  SunIcon,
  SearchIcon
} from "@chakra-ui/icons";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="links">
          <p className="logo">Logo</p>
          <Popover trigger="hover">
            <PopoverTrigger>
              <Link fontSize={15} color="#4a5568" _hover={{ color: "black" }}>
                Inspiration
              </Link>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverBody>
                <VStack spacing={4} align="stretch">
                  <Link
                    _hover={{
                      background: "pink.50",
                      color: "#ed64a6"
                    }}
                  >
                    <HStack spacing={4} align="stretch">
                      <div className="align">
                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                          Explore Design Works
                        </p>
                        <p style={{ color: "grey" }}>
                          Trending design to inspire you
                        </p>
                      </div>
                      <div className="icon">
                        <ChevronRightIcon />
                      </div>
                    </HStack>
                  </Link>
                  <Link
                    _hover={{
                      background: "pink.50",
                      color: "#ed64a6"
                    }}
                  >
                    <HStack spacing={4} align="stretch">
                      <div className="align">
                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                          New & noteworthy
                        </p>
                        <p style={{ color: "grey" }}>Up-and-coming designers</p>
                      </div>
                      <div className="icon">
                        <ChevronRightIcon />
                      </div>
                    </HStack>
                  </Link>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover trigger="hover">
            <PopoverTrigger>
              <Link fontSize={15} color="#4a5568" _hover={{ color: "black" }}>
                Find Work
              </Link>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverBody>
                <VStack spacing={4} align="stretch">
                  <Link
                    _hover={{
                      background: "pink.50",
                      color: "#ed64a6"
                    }}
                  >
                    <HStack spacing={4} align="stretch">
                      <div className="align">
                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                          Job Board
                        </p>
                        <p style={{ color: "grey" }}>
                          Find your dream design job
                        </p>
                      </div>
                      <div className="icon">
                        <ChevronRightIcon />
                      </div>
                    </HStack>
                  </Link>
                  <Link
                    _hover={{
                      background: "pink.50",
                      color: "#ed64a6"
                    }}
                  >
                    <HStack spacing={4} align="stretch">
                      <div className="align">
                        <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                          Freelance Projects
                        </p>
                        <p style={{ color: "grey" }}>
                          An exclusive list for contract work
                        </p>
                      </div>
                      <div className="icon">
                        <ChevronRightIcon />
                      </div>
                    </HStack>
                  </Link>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Link fontSize={15} color="#4a5568" _hover={{ color: "black" }}>
            Learn Design
          </Link>
          <Link fontSize={15} color="#4a5568" _hover={{ color: "black" }}>
            Hire Designers
          </Link>
        </div>
        <div className="signup">
          <Button variant="link">Sign In</Button>
          <Button colorScheme="pink">Sign Up</Button>
        </div>
      </div>
      <div className="sidebar">
        <Button
          bg="white"
          _hover={{ backgroundColor: "#00baf2", color: "white" }}
        >
          <div style={{ padding: "20px" }}>
            <DragHandleIcon />
          </div>
          Home
        </Button>
        <Button
          bg="white"
          _hover={{ backgroundColor: "#00baf2", color: "white" }}
        >
          <div style={{ padding: "20px" }}>
            <SearchIcon />
          </div>
          Trending
        </Button>
        <Button
          bg="white"
          _hover={{ backgroundColor: "#00baf2", color: "white" }}
        >
          <div style={{ padding: "20px" }}>
            <SunIcon />
          </div>
          Explore
        </Button>
        <Button
          bg="white"
          _hover={{ backgroundColor: "#00baf2", color: "white" }}
        >
          <div style={{ padding: "20px" }}>
            {" "}
            <StarIcon textAlign="justify" />{" "}
          </div>
          Favourites
        </Button>
        <Button
          bg="white"
          _hover={{ backgroundColor: "#00baf2", color: "white" }}
        >
          {" "}
          <div style={{ padding: "20px" }}>
            <SettingsIcon />
          </div>{" "}
          Settings
        </Button>
      </div>
    </div>
  );
}
