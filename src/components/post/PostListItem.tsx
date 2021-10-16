import { graphql, Link } from 'gatsby';
import Tag from '~/components/tag/Tag';

const PostListItem: React.VFC<PostListItemFragment> = ({
  slug,
  excerpt,
  frontmatter,
}) => {
  return (
    <div>
      <Link to={`/post/${slug!}`} className="hover:text-purple-500">
        <h2 className="text-xl font-medium">{frontmatter?.title}</h2>
      </Link>
      <div className="text-gray-500 mt-2">{frontmatter?.date}</div>
      {excerpt && <div className="mt-2">{frontmatter?.excerpt || excerpt}</div>}
      {frontmatter?.tags && (
        <div className="flex flex-row flex-wrap space-x-3 mt-3">
          {frontmatter.tags.map((tag) => (
            <Tag key={tag} name={tag!} color="purple" />
          ))}
        </div>
      )}
    </div>
  );
};

export default PostListItem;

export const postListItemFragment = graphql`
  fragment PostListItem on Mdx {
    slug
    excerpt(pruneLength: 150, truncate: true)
    frontmatter {
      title
      date(formatString: "MMM DD, YYYY")
      excerpt
      tags
    }
  }
`;