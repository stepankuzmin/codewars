(ns findeven.core)

(defn split [index collection]
  [(take index collection) (drop (inc index) collection)])

(defn find-even-index [arr]
  (let [length (dec (count arr))]
    (loop [index 0]
      (cond
        (> index length) -1
        (->> arr
          (split index)
          (map (partial apply +))
          (apply =)) index
        :else (recur (inc index))))))