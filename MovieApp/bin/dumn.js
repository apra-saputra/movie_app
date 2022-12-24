<View style={styles.card}>
  <View style={styles.cardHeader}>
    <Text style={styles.title}>{movieById.title}</Text>
  </View>
  <View style={styles.row}>
    <Image
      source={{ uri: imageLink + movieById.poster_path }}
      style={{ height: 200, width: 150, marginTop: 10, marginLeft: 10 }}
    />
    <View style={{ height: 200, width: 200, justifyContent: "center" }}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(movieById.homepage)}>
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
          Website
        </Text>
      </TouchableOpacity>
      {isRate ? (
        ""
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(movieById.trailerUrl)}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "600",
            }}>
            Rate
          </Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
  <View style={styles.content}>
    <Text>{movieById.overview}</Text>
  </View>
  <View style={styles.content}>
    <Text style={styles.textTitle}>Genre :</Text>
    {movieById.genres?.map((item) => {
      return <Text key={item.id}>{item.name}</Text>;
    })}
  </View>
  <View style={styles.content}>
    <Text style={styles.textTitle}>Cast :</Text>
    {casts.map((cast) => {
      //card to go to cast detail
      return (
        <Text key={cast.id}>
          {cast.name} as {cast.character}
        </Text>
      );
    })}
  </View>
</View>;
