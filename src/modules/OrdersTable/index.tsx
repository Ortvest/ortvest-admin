import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import { useMemo } from "react";
import { customTheme } from "../../providers/theme";

export const OrdersTable = () => {
  const data = [
    {
      id: 1,
      clientName: "L&K Work",
      clientEmail: "lk@gmail.com",
      selectedServices: ["Web app", "Mobile app", "Design"],
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod dicta officia? Veniam corrupti rem voluptas fugit ratione illo modi est neque! Esse ad voluptatibus, modi commodi cum est deleniti.",
    },
    {
      id: 2,
      clientName: "L&K Work",
      clientEmail: "lk@gmail.com",
      selectedServices: ["Web app", "Mobile app", "Design"],
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod dicta officia? Veniam corrupti rem voluptas fugit ratione illo modi est neque! Esse ad voluptatibus, modi commodi cum est deleniti.",
    },
    {
      id: 3,
      clientName: "L&K Work",
      clientEmail: "lk@gmail.com",
      selectedServices: ["Web app", "Mobile app", "Design"],
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod dicta officia? Veniam corrupti rem voluptas fugit ratione illo modi est neque! Esse ad voluptatibus, modi commodi cum est deleniti.",
    },
    {
      id: 4,
      clientName: "L&K Work",
      clientEmail: "lk@gmail.com",
      selectedServices: ["Web app", "Mobile app", "Design"],
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod dicta officia? Veniam corrupti rem voluptas fugit ratione illo modi est neque! Esse ad voluptatibus, modi commodi cum est deleniti.",
    },
    {
      id: 5,
      clientName: "L&K Work",
      clientEmail: "lk@gmail.com",
      selectedServices: ["Web app", "Mobile app", "Design"],
      productDescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod dicta officia? Veniam corrupti rem voluptas fugit ratione illo modi est neque! Esse ad voluptatibus, modi commodi cum est deleniti.",
    },
  ];

  const filteredData = useMemo(() => {
    return data.map((item) => {
      return Object.entries(item).filter((value) => {
        return (
          value[0] === "clientEmail" ||
          value[0] === "clientName" ||
          value[0] === "id"
        );
      });
    });
  }, [data]);

  console.log(filteredData);
  return (
    <Box p={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Order id</Th>
            <Th>Client Name</Th>
            <Th>Client Email</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((client, index) => (
            <Tr
              _hover={{
                backgroundColor: customTheme.colors.gray[50],
                cursor: "pointer",
                transition: "0.3 ease-in-out",
              }}
              onClick={() => alert(client.clientEmail)}
              key={index}
            >
              <Td>{client.id}</Td>
              <Td>{client.clientName}</Td>
              <Td>{client.clientEmail}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
