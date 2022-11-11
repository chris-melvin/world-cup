interface AppProps {
  group: string;
  teams: [];
}

export const Table = ({ group, teams }: AppProps) => {
  return (
    <table className="border border-1">
      <caption className="bg-sky-500">{group}</caption>
      <tbody>
        {teams.map((team, i) => (
          <tr key={`team-${i}`}>
            <td>Flag</td>
            <td>{team}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
