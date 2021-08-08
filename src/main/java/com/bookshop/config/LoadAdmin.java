package com.bookshop.config;

import com.bookshop.dao.UserRepository;
import com.bookshop.domain.user.Gender;
import com.bookshop.domain.user.Role;
import com.bookshop.domain.user.User;
import com.bookshop.dto.UserDto;
import com.bookshop.mapper.UserMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Random;
import java.util.Scanner;

@Component
@Slf4j
public class LoadAdmin implements CommandLineRunner {

    private UserRepository userRepository;

    public LoadAdmin(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void loadAdmin() throws IOException {
        log.info("Reading from the file to load the admin");

        File file = new File("loadAdmin.txt");
        Scanner scanner = new Scanner(file);
        while (scanner.hasNext()) {
            String[] line = scanner.nextLine().split(",");

            UserDto user = new UserDto();

            user.setFirstName(line[0]);
            user.setLastName(line[1]);
            user.setAddress(line[2]);
            user.setBirthDate(LocalDate.parse(line[3]));
            user.setGender(Gender.valueOf(line[4]));
            user.setEmail(line[5]);
            user.setPassword(line[6]);
            User user1 = UserMapper.toEntity(user);
            user1.setResetToken(generateResetToken());
            user1.setRole(Role.valueOf(line[7]));
            user1.setIsDisabled(false);

            if(userRepository.findByEmail(user.getEmail()) != null)
                log.info("Admin already exist");
            else {
                userRepository.save(user1);
                log.info("User with username : {} and role : {} saved to DB", user1.getEmail(), user1.getRole());
            }
        }
    }

    private Integer generateResetToken() {
        Random random = new Random();
        int number = random.nextInt(999999);

        return Integer.valueOf(String.format("%06d", number));
    }

    @Override
    public void run(String... args) throws Exception {
        loadAdmin();
    }
}
