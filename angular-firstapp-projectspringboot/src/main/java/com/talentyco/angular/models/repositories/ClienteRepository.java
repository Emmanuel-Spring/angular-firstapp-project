package com.talentyco.angular.models.repositories;

import org.springframework.data.repository.CrudRepository;

import com.talentyco.angular.models.entity.Cliente;

public interface ClienteRepository extends CrudRepository<Cliente, Long>{

}
