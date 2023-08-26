FROM maven:3.8.3-openjdk-17 as compileStage
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests -q

FROM maven:3.8.3-openjdk-17
WORKDIR /app
EXPOSE 1337
COPY --from=compileStage /app/target/datavisualizer-0.0.1.jar ./
CMD ["java","-jar","datavisualizer-0.0.1.jar"]