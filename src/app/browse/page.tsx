// Browse movies (optional filtering)
// o By genre
// o By director
// o By actor
//  Search functionality for movies (basic search by title)

// Add movies to cart (stored in cookies)

// Optional - Implement more complex filters (e.g., release year range, runtime, multiple genres)
// Optional Allow customers to rate and review purchased movies
// Optional Enable users to add movies to a wishlist for future purchase
// Optinal Add functionality to link and display movie trailers (embedded YouTube videos)
// Optinal Add buttons to share movie links on social media platforms

/*
Optinal:
7. Advanced Search
o Implement full-text search for movies using PostgreSQL's full-text search
capabilities
o Include search by director, actor, and genre*/
export default function Dashboard() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <main className="w-9/10 m-auto">
        <h1 className="text-3xl font-bold mb-4">Start of movie content</h1>
        <p className="text-muted-foreground">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          provident a officiis, impedit deleniti odio tenetur id perferendis,
          itaque aut veritatis consequuntur quae laboriosam in ullam tempora,
          dolorum officia esse excepturi fuga. Possimus minus provident nesciunt
          natus! Sed vel quam fuga, tempora magni totam consequatur reiciendis
          provident asperiores, perspiciatis maiores.
        </p>
      </main>
    </div>
  );
}
