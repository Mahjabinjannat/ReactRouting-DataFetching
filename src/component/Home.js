function Home() {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "20px", margin: "10px" }}>
        Welcome to home
      </h1>
      <p style={{ textAlign: "center", padding: "0px 200px" }}>
        The -m option may be used to supplement the log message of the created
        commit, but the additional commentary will be thrown away once the
        "fixup!" commit is squashed into by git rebase --autosquash . The commit
        created by --fixup=amend: is similar but its subject is instead prefixed
        with "amend!".
      </p>
    </div>
  );
}

export default Home;
