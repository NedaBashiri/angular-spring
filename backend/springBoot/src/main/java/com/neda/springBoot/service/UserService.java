package com.neda.springBoot.service;

import com.neda.springBoot.model.User;
import com.neda.springBoot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    public User insert(User user){
        return userRepository.save(user);
    }

    public List<User> findAll() {

        return (List<User>) userRepository.findAll();
    }

    public User findById(Long id) {
        return userRepository.findById(id).get();
    }

    public User update(User user) {

        return userRepository.save(user);
    }

    public void delete(Long id) {

        userRepository.deleteById(id);
    }
}
