import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const C = {
  text: "#2E2F2A",
  panel: "#C9D598", // pravý panel
  chipBg: "#FFFFFF",
  chipBorder: "rgba(0,0,0,0.08)",
  cta: "#C97A2D",
};

type Story = {
  title: string;
  age: string;
  terrain: string;
  duration: string;
  description: string;
  image: ImageSourcePropType;
  badge?: string;
};

export default function HeroCard({ story }: { story: Story }) {
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Image source={story.image} style={styles.leftImg} resizeMode="cover" />
      </View>

      <View style={styles.right}>
        <Text style={styles.title}>{story.title}</Text>

        <View style={styles.labelRow}>
          <Chip>🧒 {story.age}</Chip>
          <Chip>🏞️ {story.terrain}</Chip>
          <Chip>⏱️ {story.duration}</Chip>
        </View>

        <Text style={styles.desc} numberOfLines={4}>
          {story.description}
        </Text>

        <PrimaryButton label="Objevovat" />
      </View>

      {/* badge nahoře vlevo (volitelně) */}
      {story.badge ? (
        <View style={styles.badgeWrap}>
          <Badge>{story.badge}</Badge>
        </View>
      ) : null}
    </View>
  );
}

/* ====== Atomy ====== */
function Chip({ children }: { children: React.ReactNode }) {
  return (
    <View style={a.label}>
      <Text style={a.labelText}>{children}</Text>
    </View>
  );
}

function PrimaryButton({ label }: { label: string }) {
  return (
    <Pressable style={a.btn}>
      <Text style={a.btnText}>{label}</Text>
    </Pressable>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <View style={a.badge}>
      <Text style={a.badgeText}>{children}</Text>
    </View>
  );
}

/* ====== Styly ====== */
const styles = StyleSheet.create({
  // vnější obal pro stín (aby fungoval i s overflow uvnitř)

  // vlastní karta (zaoblení + overflow kvůli obrázku)
  card: {
    borderRadius: 16,
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: "#FFF",
  },

  left: { width: "40%" },
  leftImg: { width: "100%", height: "100%" },

  right: {
    width: "60%",
    backgroundColor: C.panel,
    padding: 12,
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 18,
    fontWeight: "800",
    color: C.text,
    marginBottom: 8,
  },

  labelRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 2,
  },

  desc: {
    fontSize: 12,
    lineHeight: 16,
    color: C.text,
    marginBottom: 10,
    flexShrink: 1,
  },

  // badge pozice
  badgeWrap: {
    position: "absolute",
    left: 10,
    top: 8,
    zIndex: 2,
  },
});

const a = StyleSheet.create({
  label: {
    backgroundColor: C.chipBg,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginRight: 5,
    marginBottom: 5,
  },
  labelText: { fontSize: 10, color: C.text },

  btn: {
    alignSelf: "flex-start",
    backgroundColor: C.cta,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 22,
  },
  btnText: { color: "white", fontWeight: "800", fontSize: 12 },

  badge: {
    alignSelf: "center",
    backgroundColor: "#F6C053",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 999,
  },
  badgeText: { color: C.text, fontWeight: "800", fontSize: 8 },
});
