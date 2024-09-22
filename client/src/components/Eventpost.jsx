// import React from "react";
// import useFetch from "../services/useFetch"; // Adjust the import path if necessary
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Eventpost = () => {
//   const { data, loading, error } = useFetch("http://localhost:8000/events"); // Adjust the URL if needed

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   const itemVariants = {
//     hidden: { opacity: 0, x: -100 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const titleVariants = {
//     hidden: { opacity: 0, x: 100 },
//     visible: { opacity: 1, x: 0 },
//   };

//   return (
//     <>
//       <div className="bg-black pt-14">
//         <h1 className="text-white text-center text-6xl font-semibold">
//           Events
//         </h1>
//       </div>
//       <div className="py-20 pl-20 space-y-8 bg-black">
//         {data &&
//           data.map((event) => (
//             <Link to={`/events/${event._id}#top`} key={event._id}>
//               <motion.div
//                 className="flex items-center bg-black rounded-lg p-4"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5 }}
//                 variants={itemVariants}
//               >
//                 {/* Event Image */}
//                 <div className="w-2/5">
//                   <img
//                     src={event.image.url}
//                     alt={event.image.fileName}
//                     className="w-full h-full object-cover rounded-lg"
//                     loading="lazy"
//                   />
//                 </div>
//                 {/* Event Details */}
//                 <div className="w-3/5 pl-20 text-white font-thin">
//                   <motion.h2
//                     className="text-[3rem] font-bold mb-2"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     variants={titleVariants}
//                   >
//                     {event.title}
//                   </motion.h2>
//                   <motion.p
//                     className="font-bold text-gray-400 text-lg pt-4"
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5 }}
//                     variants={titleVariants}
//                   >
//                     {event.date}
//                   </motion.p>
//                 </div>
//               </motion.div>
//             </Link>
//           ))}
//       </div>
//     </>
//   );
// };

// export default Eventpost;

// const AnimatedCard = () => {
//   return (
//     <div className="container mx-auto">

//       {/* cards section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
//         {CardsData.map(({ id, img, title, desc }) => {
//           return (
//             <div
//               key={id}
//               className="text-white shadow-md rounded-lg overflow-hidden relative group "
//             >
//               <img
//                 src={img}
//                 alt=""
//                 className="w-full max-w-[300px] h-[350px] rounded-lg"
//               />
//               {/* overlay section */}
//               <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
//                 <div className="space-y-4">
//                   <Slide cascade>
//                     <h1 className="text-3xl font-bold">{title}</h1>
//                     <Fade cascade damping={0.05}>
//                       {desc}
//                     </Fade>
//                     <div>
//                       <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
//                         View
//                       </button>
//                     </div>
//                   </Slide>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AnimatedCard;
import React from "react";
import useFetch from "../services/useFetch"; // Adjust the import path if necessary
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Eventpost = () => {
  const {
    data: events,
    loading,
    error,
<<<<<<< HEAD
  } = useFetch("http://localhost:8080/events"); // Adjust the URL if needed
=======
  } = useFetch("http://localhost:8000/events"); // Adjust the URL if needed
>>>>>>> bfeb7a5 (first commit)

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
<<<<<<< HEAD
    <div className="container mx-auto bg-blue-800 py-12 ">
=======
    <div className="container mx-auto bg-blue-800 py-12">
>>>>>>> bfeb7a5 (first commit)
      <h1 className="text-white text-center text-7xl font-semibold mb-10 pb-10">
        Events
      </h1>

      {/* cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        {events &&
          events.map((event) => (
            <Link to={`/events/${event._id}#top`} key={event._id}>
              <motion.div
                className="text-white shadow-md rounded-2xl overflow-hidden relative group"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={event.image.url}
                  alt={event.image.fileName}
                  className="w-full max-w-[400px] h-[410px] rounded-lg object-cover"
                  loading="lazy"
                />
                {/* overlay section */}
                <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                  <div className="space-y-7 pt-20">
                    <motion.h2
                      className="text-3xl font-bold text-center pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {event.title}
                    </motion.h2>
                    <motion.p
                      className="text-lg text-center "
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {event.date}
                    </motion.p>
                    <motion.div
                      className="pl-36 ml-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                        View
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Eventpost;
